import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';
import { companyInfo, productCategories, services, news, galleryImages } from '@/data/content';

export async function GET(request: Request) {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const token = process.env.SANITY_API_WRITE_TOKEN;

  if (!projectId || !dataset || !token) {
    return NextResponse.json(
      { error: 'Missing Sanity credentials in environment variables.' },
      { status: 500 }
    );
  }

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-03-22',
    token,
    useCdn: false,
  });

  try {
    // Helper to upload image from URL
    const uploadImage = async (url: string) => {
      try {
        const res = await fetch(url);
        const blob = await res.blob();
        const buffer = Buffer.from(await blob.arrayBuffer());
        const asset = await client.assets.upload('image', buffer, { filename: 'image.jpg' });
        return {
          _type: 'image',
          asset: { _type: 'reference', _ref: asset._id }
        };
      } catch (e) {
        console.error(`Failed to upload image: ${url}`, e);
        return undefined;
      }
    };

    console.log('Starting migration...');

    // 1. Company Info
    console.log('Migrating Company Info...');
    await client.createOrReplace({
      _id: 'companyInfo',
      _type: 'companyInfo',
      name: companyInfo.name,
      address: companyInfo.address,
      phone: companyInfo.phone,
      email: companyInfo.email,
      workingHours: companyInfo.workingHours,
      social: companyInfo.social,
    });

    // 2. Product Categories
    console.log('Migrating Product Categories...');
    for (const cat of productCategories) {
      const imageAsset = await uploadImage(cat.image);
      await client.createOrReplace({
        _id: `productCategory-${cat.id}`,
        _type: 'productCategory',
        name: cat.name,
        slug: { _type: 'slug', current: cat.id },
        description: cat.description,
        ...(imageAsset && { image: imageAsset }),
      });
    }

    // 3. Services
    console.log('Migrating Services...');
    for (const srv of services) {
      await client.createOrReplace({
        _id: `service-${srv.id}`,
        _type: 'service',
        title: srv.title,
        description: srv.description,
        icon: srv.icon,
      });
    }

    // 4. News
    console.log('Migrating News...');
    for (const item of news) {
      const imageAsset = await uploadImage(item.image);
      await client.createOrReplace({
        _id: `news-${item.id}`,
        _type: 'newsItem',
        title: item.title,
        slug: { _type: 'slug', current: item.id },
        date: item.date,
        summary: item.summary,
        ...(imageAsset && { image: imageAsset }),
      });
    }

    // 5. Gallery
    console.log('Migrating Gallery...');
    for (const [index, img] of galleryImages.entries()) {
      const imageAsset = await uploadImage(img.url);
      await client.create({
        _type: 'galleryImage',
        title: img.title,
        category: img.category,
        ...(imageAsset && { image: imageAsset }),
      });
    }

    console.log('Migration completed successfully!');
    return NextResponse.json({ success: true, message: 'Migration completed successfully' });
  } catch (error: any) {
    console.error('Migration failed:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

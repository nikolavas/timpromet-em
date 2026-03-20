# Tim Promet-EM Corporate Website

This is a production-ready Next.js 14+ application built for Tim Promet-EM.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel Ready

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app`: Next.js App Router pages and layouts.
- `/components`: Reusable UI components (Header, Footer, etc.).
- `/data`: Local content data (`content.ts`) for products, news, and gallery.
- `/public`: Static assets (images, fonts, etc.).

## Content Management

Currently, the content is managed locally in `/data/content.ts`. This allows the site to run immediately without a backend. 

**To update content:**
1. Open `/data/content.ts`.
2. Modify the arrays and objects (e.g., `productCategories`, `news`, `companyInfo`).
3. Replace the placeholder `https://picsum.photos` URLs with actual image paths once you upload real assets to the `/public` folder or a CDN.

**Future CMS Integration:**
The data structure in `content.ts` is designed to be easily replaced by a headless CMS (like Sanity, Contentful, or Strapi) or a database in the future. You just need to replace the local imports with API fetch calls in the respective page components.

## Deployment to Vercel

This project is optimized for Vercel deployment.

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and log in.
3. Click "Add New..." -> "Project".
4. Import your GitHub repository.
5. Vercel will automatically detect Next.js and configure the build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click "Deploy".

## Assets to Replace

Before final launch, ensure you replace the following placeholders:
- **Images:** All `picsum.photos` URLs in `/data/content.ts` and `/app/page.tsx`.
- **Favicon:** Add a real favicon to `/app/favicon.ico`.
- **Google Maps:** The iframe in `/app/contact/page.tsx` and `/app/page.tsx` currently uses a generic Strumica coordinate. Update the `src` URL with the exact Google Maps embed URL for Tim Promet-EM.

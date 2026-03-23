import { type SchemaTypeDefinition } from 'sanity'

import companyInfo from './schemas/documents/companyInfo'
import productCategory from './schemas/documents/productCategory'
import service from './schemas/documents/service'
import newsItem from './schemas/documents/newsItem'
import galleryImage from './schemas/documents/galleryImage'
import page from './schemas/documents/page'

import hero from './schemas/objects/hero'
import blockContent from './schemas/objects/blockContent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    companyInfo,
    productCategory,
    service,
    newsItem,
    galleryImage,
    page,
    // Objects
    hero,
    blockContent,
  ],
}

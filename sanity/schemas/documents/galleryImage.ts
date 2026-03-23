import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Производи (Products)', value: 'Производи' },
          { title: 'Логистика (Logistics)', value: 'Логистика' },
          { title: 'Услуги (Services)', value: 'Услуги' },
          { title: 'Земјоделство (Agriculture)', value: 'Земјоделство' },
          { title: 'Компанија (Company)', value: 'Компанија' },
          { title: 'Потекло (Origin)', value: 'Потекло' },
          { title: 'Квалитет (Quality)', value: 'Квалитет' },
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})

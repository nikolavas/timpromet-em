import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'companyInfo',
  title: 'Company Information',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'workingHours',
      title: 'Working Hours',
      type: 'object',
      fields: [
        { name: 'weekdays', title: 'Weekdays', type: 'string' },
        { name: 'saturday', title: 'Saturday', type: 'string' },
        { name: 'sunday', title: 'Sunday', type: 'string' },
      ],
    }),
    defineField({
      name: 'social',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
      ],
    }),
  ],
})

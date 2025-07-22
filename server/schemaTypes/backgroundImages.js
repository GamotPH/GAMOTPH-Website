export default {
    name: 'backgroundImage',
    title: 'Background Image',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: "slogan",
        type: "text",
        title: "Slogan",
    },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'themeClassification',
        title: 'Theme Classification',
        type: 'string',
        options: {
          list: [
            { title: 'Light Background (Use dark text)', value: 'light' },
            { title: 'Dark Background (Use light text)', value: 'dark' },
          ],
          layout: 'radio'
        },
        validation: Rule => Rule.required()
      },
    ],
  };
  
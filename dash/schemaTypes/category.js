export default {
    type: 'document',
    name: 'category',
    title: 'Category',
    fields: [
        {
            name: 'type',
            type: 'string',
            options: {
                list: ['topic', 'method'],
                layout: 'radio',
                direction: 'horizontal'
            }
        },
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'URL',
            type: 'slug',
            options: {
                source: 'title'
            }
        },
        {
            name: 'description',
            type: 'text'
        },
        {
            name: 'image',
            type: 'image'
        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'type'
        }
    }
}

export default {
    type: 'document',
    name: 'category',
    title: 'Category',
    fields: [
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
    ]
}

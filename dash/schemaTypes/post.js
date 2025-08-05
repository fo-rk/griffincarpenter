export default {
    type: 'document',
    name: 'post',
    title: 'Post',
    fields: [
        {
            name: 'type',
            type: 'string'
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
            name: 'body',
            type: 'array',
            of: [
                { type: 'block' }
            ]
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'date'
        },
        {
            name: 'image',
            type: 'image'
        },
        {
            name: 'authors',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'person' } }]
        }
    ]
}

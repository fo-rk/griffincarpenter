export default {
    type: 'document',
    name: 'page',
    title: 'Page',
    fields: [
        {
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'URL',
            type: 'slug',
            options: {
                source: 'title'
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'content',
            type: 'content',
            validation: Rule => Rule.required()
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

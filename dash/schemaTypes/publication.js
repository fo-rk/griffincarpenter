export default {
    type: 'document',
    name: 'publication',
    title: 'Publication',
    fields: [
        {
            name: 'type',
            type: 'string',
            options: {
                list: [
                    { value: 'briefing', title: 'Briefing' },
                    { value: 'report', title: 'Report' }
                ],
                layout: 'radio',
                direction: 'horizontal'
            }
        },
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'subtitle',
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
        },
        {
            name: 'downloads',
            type: 'array',
            of: [{
                type: 'file',
                fields: [
                    {
                        name: 'title',
                        type: 'string'
                    }
                ]
            }]
        },
        {
            name: 'categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' }}]
        }
    ]
}

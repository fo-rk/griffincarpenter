export default {
    type: 'document',
    name: 'settings',
    title: 'Settings',
    fields: [
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Short description',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'logo',
            type: 'image'
        },
        {
            name: 'icon',
            type: 'image'
        },
        {
            name: 'menu',
            type: 'array',
            of: [{
                name: 'item',
                type: 'object',
                fields: [
                    {
                        name: 'page',
                        type: 'reference',
                        to: [{
                            type: 'page'
                        }]
                    },
                    {
                        name: 'topMenu',
                        title: 'Include in top menu?',
                        type: 'boolean'
                    }
                ],
                preview: {
                    select: {
                        title: 'page.title'
                    }
                }
            }]
        }
    ]
}

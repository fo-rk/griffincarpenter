import { LaunchIcon, LinkIcon } from '@sanity/icons';

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
            of: [
                {
                    type: 'block',
                    styles: [
                        {title: 'Normal', value: 'normal'}
                    ],
                    marks: {
                        annotations: [
                            {
                                name: 'internalLink',
                                type: 'object',
                                title: 'Internal link',
                                icon: LinkIcon,
                                fields: [
                                    {
                                        name: 'reference',
                                        type: 'reference',
                                        title: 'Reference',
                                        to: [
                                            { type: 'post' },
                                            { type: 'page' },
                                            { type: 'publication' },
                                            { type: 'category' }
                                        ]
                                    }
                                ]
                            },
                            {
                                name: 'externalLink',
                                type: 'object',
                                title: 'External link',
                                icon: LaunchIcon,
                                fields: [
                                    {
                                        name: 'url',
                                        type: 'url',
                                        validation: Rule => Rule.uri({
                                            scheme: ['http', 'https', 'mailto', 'tel']
                                        })
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
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

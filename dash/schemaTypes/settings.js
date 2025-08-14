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
            name: 'url',
            type: 'url',
            readOnly: true
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
            name: 'socialImage',
            title: 'Social share image',
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
        },
        {
            name: 'fisheries',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    type: 'string'
                },
                {
                    name: 'sections',
                    type: 'array',
                    of: [
                        {
                            name: 'section',
                            type: 'object',
                            fields: [
                                {
                                    name: 'title',
                                    type: 'string'
                                },
                                {
                                    name: 'subtitle',
                                    type: 'string'
                                },
                                {
                                    name: 'stage',
                                    type: 'string',
                                    options: {
                                        list: ['advice', 'process', 'product'],
                                        layout: 'radio',
                                        direction: 'horizontal'
                                    }
                                },
                                {
                                    name: 'questions',
                                    type: 'array',
                                    of: [{
                                        type: 'object',
                                        name: 'question',
                                        fields: [
                                            {
                                                name: 'title',
                                                type: 'string'
                                            },
                                            {
                                                name: 'topics',
                                                type: 'array',
                                                of: [{
                                                    name: 'topic',
                                                    type: 'object',
                                                    fields: [
                                                        {
                                                            name: 'title',
                                                            type: 'string'
                                                        },
                                                        {
                                                            name: 'documents',
                                                            type: 'array',
                                                            of: [
                                                                {
                                                                    type: 'reference',
                                                                    to: [
                                                                        { type: 'post'},
                                                                        { type: 'publication'}
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }]
                                            }
                                        ]
                                    }]
                                }
                            ],
                            preview: {
                                select: {
                                    title: 'title',
                                    subtitle: 'stage'
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
}

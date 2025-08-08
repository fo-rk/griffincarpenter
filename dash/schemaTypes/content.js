import { LaunchIcon, LinkIcon } from '@sanity/icons';

const textBlock = {
    type: 'object',
    name: 'textBlock',
    fields: [
        {
            name: 'text',
            type: 'array',
            of: [
              {
                  name: 'image',
                  type: 'image',
                  fields: [
                      {
                          name: 'credit',
                          type: 'string'
                      }
                  ]
              },
              {
                  name: 'featuredLink',
                  title: 'Featured link',
                  type: 'reference',
                  to: [
                      { type: 'page' },
                      { type: 'post' },
                      { type: 'publication' }
                  ]
              },
                {
                    type: 'block',
                    styles: [
                        {title: 'Normal', value: 'normal'},
                        {title: 'Title', value: 'h1'},
                        {title: 'Subtitle', value: 'h2'},
                        {title: 'Minor heading', value: 'h3'},
                        {title: 'Quote', value: 'blockquote'},
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
        }
    ]
}

export default {
    type: 'array',
    name: 'content',
    title: 'Content',
    of: [
        textBlock
    ]
}

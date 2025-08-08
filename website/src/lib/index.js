import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: 'h7z69sg4',
    dataset: 'production',
    apiVersion: '2025-07-31',
    token: 'skM3U3jIttxYgqzmKlVRO3py84YZazbmFFumppMXbrd73dlX6Nudzy53XsPrdCYCCIQdHtlUvK5aTiOY2z4psc4BEv8ICyw5RdGxm1L8tS04br7K2vMZO7Hcxd2JApwbCvfXv0eCfrOLTYtbyJYtE2L3xP5mQ0RfHTi9gFMWomnBFJCiNP7f',
    useCdn: false,
    perspective: 'published'
})

export const slugPrefixFromType = (doc) => {
    switch (doc._type) {
        case 'publication':
            switch (doc.type) {
                case 'briefing':
                    return 'briefings/';
                case 'report':
                    return 'reports/';
            }
        case 'post':
            return 'posts/';
        case 'page':
            return '';
        case 'category':
            return 'categories/'
    }
}

export const typeFromDoc = (doc) => {
    switch (doc._type) {
        case 'publication':
            switch (doc.type) {
                case 'briefing':
                    return 'Briefing';
                case 'report':
                    return 'Report';
            }
        case 'post':
            return 'Post';
        case 'page':
            return 'Page';
        case 'category':
            return 'Category'
    }
}

export const textBlockUnpacking = `
  ...,
  _type == 'featuredLink' => @-> {
      'doc': {
          title,
          slug,
          type,
          _type,
          publishedAt,
          image{
              'url':asset->url
          }
      }
  },
  _type == 'image' => {
      'url':asset->url,
      credit
  },
  markDefs[]{
      ...,
      _type == 'internalLink' => {
          reference->{
              _id,
              slug,
              _type,
              type
          }
      }
  }
`

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

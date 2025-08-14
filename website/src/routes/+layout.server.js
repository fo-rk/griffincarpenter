import { client, textBlockUnpacking } from "$lib";

export const load = async () => {
    const settings = await client.fetch(`
        *[_id == 'settings']{
            ...,
            logo{
                'url': asset->url
            },
            icon{
                'url': asset->url
            },
            socialImage{
                'url': asset->url
            },
            menu[]{
                ...,
                page->{
                    _id,
                    _type,
                    slug,
                    title
                }
            },
            description[]{
              ${textBlockUnpacking}
            },
            'plainDescription': pt::text(description)
        }[0]
    `);

    return {
        settings
    }
}

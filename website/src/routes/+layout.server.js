import { client } from "$lib";

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
            menu[]{
                ...,
                page->{
                    _id,
                    _type,
                    slug,
                    title
                }
            }
        }[0]
    `);

    return {
        settings
    }
}

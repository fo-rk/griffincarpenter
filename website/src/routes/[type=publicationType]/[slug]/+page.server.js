import { client } from "$lib";
import { error } from "@sveltejs/kit";
import { slugPrefixFromType } from '$lib';

export const load = async ({ params }) => {
    const { type, slug } = params;

    const publication = await client.fetch(`
        *[_type == 'publication' && slug.current == $slug]{
            ...,
            image{
                'url': asset->url
            },
            authors[]->{
                ...,
                image{
                    'url': asset->url
                }
            },
            downloads[]{
                title,
                'url': asset->url
            },
            categories[]->
        }[0]
    `, {
        slug
    });

    if (!publication) {
        return error(400, "No publication found");
    }

    return {
        publication,
        title: publication.title,
        ...(publication.image ? { image: publication.image.url + '?w=1200' } : {}),
        slug: `${slugPrefixFromType(publication)}${publication.slug.current}`
    }
}

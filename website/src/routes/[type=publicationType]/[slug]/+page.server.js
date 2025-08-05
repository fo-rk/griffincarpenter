import { client } from "$lib";
import { error } from "@sveltejs/kit";

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
        publication
    }
}

import { client } from "$lib";
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
    const page = await client.fetch(`
        *[_type == 'page' && slug.current == $slug]{
            ...,
            content[]{
                ...,
                _type == 'textBlock' => {
                    ...,
                    text[]{
                        ...,
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
                    }
                }
            }
        }[0]
    `, { slug: params.slug });

    if (!page) return error(400, "Couldn't find that page");

    return {
        page
    }
}

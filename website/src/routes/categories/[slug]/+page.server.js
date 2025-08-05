import { client } from "$lib";

export const load = async ({ params }) => {
    const { docs, category } = await client.fetch(`{
        'docs': *[$slug in categories[]->slug.current],
        'category': *[_type == 'category' && slug.current == $slug][0]
    }`, {
        slug: params.slug
    })

    return {
        docs,
        category
    }
}

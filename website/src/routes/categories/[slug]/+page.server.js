import { client } from "$lib";

export const load = async ({ params }) => {
    const { docs, category } = await client.fetch(`{
        'docs': *[$slug in categories[]->slug.current] | order(publishedAt desc),
        'category': *[_type == 'category' && slug.current == $slug][0]
    }`, {
        slug: params.slug
    })

    return {
        docs,
        category,
        title: `${category.title}`
    }
}

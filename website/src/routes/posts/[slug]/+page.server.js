import { client } from "$lib";

export const load = async ({ params }) => {
    const post = await client.fetch(`
        *[_type == 'post' && slug.current == $slug]{
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
            categories[]->
        }[0]
    `, { slug: params.slug });

    return {
        post,
        title: post.title,
        ...(post.image ? { image: post.image.url + '?w=1200' } : {}),
        slug: `posts/${post.slug.current}`
    }
}

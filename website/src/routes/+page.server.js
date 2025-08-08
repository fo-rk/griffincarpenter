import { client } from "$lib";

export const load = async ({ }) => {
    const {
        posts, pages, publications, categories
    } = await client.fetch(`{
        'posts': *[_type == 'post']{
            ...,
            image{
                'url': asset->url
            },
        } | order(publishedAt desc) [0..5],
        'publications': *[_type == 'publication']{
            ...,
            image{
                'url': asset->url
            },
        } | order(publishedAt desc) [0..5],
        'pages': *[_type == 'page'],
        'categories': *[_type == 'category']{
            ...,
            image{
                'url': asset->url
            },
            'numRefs': count(*[references(^._id)])
        } | order(numRefs desc)
    }`);

    return {
        posts,
        pages,
        publications,
        categories
    }
}

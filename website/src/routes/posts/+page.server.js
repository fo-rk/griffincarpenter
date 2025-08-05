import { client } from "$lib";

export const load = async ({ params }) => {
    const posts = await client.fetch(`
        *[_type == 'post'] | order(publishedAt desc)
    `);

    return {
        posts
    }
}

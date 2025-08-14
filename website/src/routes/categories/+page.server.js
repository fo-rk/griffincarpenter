import { client } from "$lib";

export const load = async () => {
    const categories = await client.fetch(`
        *[_type == 'category'] {
          ...,
          'numRefs': count(*[references(^._id)])
        } | order(numRefs desc)
    `);

    return {
        categories,
        title: 'Categories'
    }
}

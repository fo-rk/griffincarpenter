import { client } from "$lib";

export const load = async () => {
    const categories = await client.fetch(`
        *[_type == 'category']
    `);

    return {
        categories
    }
}

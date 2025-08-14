import { client } from "$lib";

export const load = async ({ params }) => {
    const types = {
        briefings: 'briefing',
        reports: 'report'
    }

    const publications = await client.fetch(`
        *[_type == 'publication'] | order(publishedAt desc)
    `);

    return {
        publications,
        title: 'Publications',
    }
}

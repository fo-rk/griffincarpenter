import { client } from "$lib";

export const load = async ({ params }) => {
    const types = {
        briefings: 'briefing',
        reports: 'report'
    }

    const publications = await client.fetch(`
        *[_type == 'publication' && type == $type]
    `, {
        type: types[params.type]
    });

    return {
        publications,
        title: types[params.type] + 's'
    }
}

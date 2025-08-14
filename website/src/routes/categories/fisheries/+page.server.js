import { client } from "$lib";

export const load = async () => {
    const page = await client.fetch(`*[_id == 'settings']{
        fisheries{
            ...,
            sections[]{
                ...,
                questions[]{
                    ...,
                    topics[]{
                        ...,
                        documents[]->{
                            title,
                            slug,
                            _id,
                            _type,
                            type,
                            publishedAt
                        }
                    }
                }
            }
        }
    }[0].fisheries`);

    return {
        page,
        title: 'Fisheries work'
    }
}

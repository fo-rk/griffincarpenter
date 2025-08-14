import { client, textBlockUnpacking } from "$lib";
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
    const page = await client.fetch(`
      *[_type == 'page' && slug.current == $slug]{
          ...,
          content[]{
              ...,
              _type == 'textBlock' => {
                ...,
                text[]{
                  ${textBlockUnpacking}
                }
              }
          }
      }[0]
    `, { slug: params.slug });

    if (!page) return error(400, "Couldn't find that page");

    return {
        page,
        title: page.title
    }
}

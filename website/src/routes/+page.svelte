<script>
    import { format } from 'date-fns';
    import { slugPrefixFromType } from '$lib';
    import Post from '$lib/Post.svelte';
    import TextBlock from "$lib/TextBlock.svelte";
    let { data } = $props();
</script>

<div class={`
    flex flex-col md:flex-row md:items-start
`}>
    <div class={`
        p-5 md:p-10 lg:p-20
        flex flex-col mx-auto md:w-2/3
    `}>
        <h4 class={`mb-6`}>
            Latest publications
        </h4>
        <div class={`flex flex-col gap-10 lg:gap-16`}>
            {#each data.publications as publication}
                <a
                    href={`/${slugPrefixFromType(publication)}${publication.slug.current}`}
                    class={`not-prose flex gap-5 md:gap-10 hover:text-blue-mid`}
                >
                    {#if publication.image}
                        <img src={publication.image.url} class={`
                            w-1/3 object-cover
                        `} />
                    {/if}
                    <div class={`flex flex-col gap-3`}>
                        <div class={`capitalize text-lg`}>
                            {publication.type}
                        </div>
                        <h2 class={`text-2xl md:text-3xl`}>
                            <span class={`font-bold`}>
                                {publication.title}
                            </span>
                            <span>
                                {publication.subtitle}
                            </span>
                        </h2>
                        <div class={`text-2xl`}>
                            {format(publication.publishedAt, 'MMMM yyyy')}
                        </div>
                    </div>
                </a>
            {/each}
        </div>

        <hr class={`my-10 mt-16 border-blue-light border-6`} />

        <h4 class={`mb-6`}>
            Latest posts
        </h4>
        <div class={`flex flex-col gap-16 mb-10`}>
            {#each data.posts as post}
                <a
                    href={`/${slugPrefixFromType(post)}${post.slug.current}`}
                    class={`not-prose flex gap-5 md:gap-10 hover:text-blue-mid`}
                >
                    {#if post.image}
                        <img src={post.image.url} class={`w-1/3`} />
                    {/if}
                    <div class={`flex flex-col gap-3`}>
                        <h2 class={`text-2xl md:text-3xl font-bold text-balance`}>
                            {post.title}
                        </h2>
                        <div class={`text-2xl`}>
                            {format(post.publishedAt, 'dd MMMM yyyy')}
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>

    <div class={`order-first md:order-last md:w-1/3 m-10 lg:m-20 p-10 bg-blue-light`}>
        <div class={`prose prose-custom prose-lg md:prose-xl lg:prose-2xl`}>
            <TextBlock value={data.settings.description} />

            <h4>Topics</h4>
            <div class={`flex flex-wrap w-full gap-4`}>
                {#each data.categories as category}
                    <a href={`/categories/${category.slug.current}`} class={`
                        md:pr-0 text-2xl flex items-center gap-4 not-prose underline
                    `}>
                        {category.title}
                    </a>
                {/each}
            </div>
        </div>
    </div>
</div>

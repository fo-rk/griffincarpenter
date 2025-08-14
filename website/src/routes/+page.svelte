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
        <h3 class={`mb-6`}>
            Latest publications
        </h3>
        <div class={`flex flex-col gap-10 lg:gap-16`}>
            {#each data.publications as publication}
                <a
                    href={`/${slugPrefixFromType(publication)}${publication.slug.current}`}
                    class={`not-prose flex gap-5 md:gap-10 hover:text-blue-mid`}
                >
                    {#if publication.image}
                        <img src={publication.image.url + '?w=750'} class={`
                            w-1/3 object-cover
                        `} />
                    {:else}
                        <div class={`bg-yellow-light w-1/3 shrink-0 p-10`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.2 -0.2 24 24" id="Programming-Graph-Pie--Streamline-Cyber">
                              <desc>
                                Programming Graph Pie Streamline Icon: https://streamlinehq.com
                              </desc>
                              <path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" d="M12.291666666666666 11.554166666666665 7.866666666666666 14.258333333333333l-4.425 -2.7041666666666666v-4.425L7.866666666666666 4.425l4.425 2.7041666666666666v4.425Z" stroke-width="0.4"></path>
                              <path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" d="M22.125 2.458333333333333H0.49166666666666664v17.7h21.633333333333333v-17.7Z" stroke-width="0.4"></path>
                              <path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" d="M0.49166666666666664 16.224999999999998h21.633333333333333" stroke-width="0.4"></path>
                              <path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" d="M11.308333333333334 20.15833333333333v2.9499999999999997" stroke-width="0.4"></path>
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.391666666666667 23.10833333333333h9.833333333333332" stroke-width="0.4"></path>
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M12.291666666666666 18.191666666666666h-1.9666666666666666" stroke-width="0.4"></path>
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M15.241666666666665 7.375h2.9499999999999997" stroke-width="0.4"></path>
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M15.241666666666665 9.341666666666667h3.933333333333333" stroke-width="0.4"></path>
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M15.241666666666665 11.308333333333334h3.933333333333333" stroke-width="0.4"></path>
                              <path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" d="M12.290683333333334 8.112499999999999 7.866666666666666 9.095833333333333l1.9784666666666666 -3.4623166666666663" stroke-width="0.4"></path>
                              <circle r={0.7} cx={11.3} cy={20.2} fill="currentColor" />
                            </svg>
                        </div>
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

<div class={`p-5 md:p-10 lg:p-20 lg:pt-0`}>
    <hr class={`my-10 mt-0 border-blue-light border-6`} />

    <h3 class={`mb-6`}>
        Latest posts
    </h3>
    <div class={`flex flex-col gap-16 mb-10`}>
        {#each data.posts as post}
            <a
                href={`/${slugPrefixFromType(post)}${post.slug.current}`}
                class={`not-prose flex gap-5 md:gap-10 hover:text-blue-mid`}
            >
                {#if post.image}
                    <img src={post.image.url + '?w=750'} class={`w-1/3 object-cover`} />
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

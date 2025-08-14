<script>
    import { format } from 'date-fns';
    import LinkMark from '$lib/LinkMark.svelte';
    import { PortableText } from '@portabletext/svelte';
    let { value, summary } = $props();
</script>

{#if value.image}
    <img src={value.image.url + '?w=1800'} class={`w-full h-96 object-cover`} alt="Main image" />
{/if}

<div class={`pad mx-auto container prose prose-custom prose-lg md:prose-xl lg:prose-2xl`}>
    <h4>
        {format(value.publishedAt, 'dd.MM.yy')}
    </h4>

    <h1>{value.title}</h1>

    <div class={`not-prose flex flex-wrap gap-8`}>
        {#each value.authors as author}
            <div class={`flex gap-4 items-center`}>
                {#if author.image}
                    <img src={author.image.url} class={`w-12 h-12`} alt="Author image" />
                {:else}
                    <svg class={`w-12 h-12`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.344 23.493v-3h1a3 3 0 0 0 3 -3v-3h2.814a0.5 0.5 0 0 0 0.473 -0.652C20.756 8.038 19.4 1.806 13.21 0.674A9.989 9.989 0 0 0 1.386 9.329 9.727 9.727 0 0 0 5.344 18.1v5.389" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
                    </svg>
                {/if}
                <div>{author.name}</div>
            </div>
        {/each}
    </div>

    {#if !summary}
        <PortableText value={value.body} components={{
            marks: {
                internalLink: LinkMark,
                externalLink: LinkMark
            },
        }} />
    {/if}

    {#if value.categories.find(cat => cat.title === 'Fisheries')}
        <a href={`/categories/fisheries`} class={`my-8 relative  bg-yellow-light hover:bg-yellow-mid no-underline flex`}>
            <div class={`p-5 w-1/2 md:w-2/3`}>
                Part of my fisheries work
                <h1>Policy to plate</h1>
            </div>
            <img src={`/img/fisheries/11.png`} class={`absolute bottom-0 right-0 md:relative w-2/3 md:w-1/3 block not-prose object-contain md:object-cover object-bottom`} />
        </a>
    {/if}

    <div class={`not-prose mt-10`}>
        <h2>Categories</h2>
        {#each value.categories as category}
            <div class={`flex gap-4 items-center`}>
                <a href={`/categories/${category.slug.current}`} class={`underline`}>
                    {category.title}
                </a>
            </div>
        {/each}
    </div>
</div>

<script>
    import { format } from 'date-fns';
    import {PortableText} from '@portabletext/svelte'
    let { value: publication, summary } = $props();
</script>

{#if publication.image}
    <img src={publication.image.url} class={`w-full h-96 object-cover`} />
{/if}

<div class={`pad prose prose-custom prose-lg md:prose-xl lg:prose-2xl`}>
    <h4>
        {format(publication.publishedAt, 'dd.MM.yy')}
    </h4>

    <h1>{publication.title}</h1>

    <div class={`not-prose`}>
        {#each publication.authors as author}
            <div class={`flex gap-4 items-center`}>
                <img src={author.image.url} class={`w-12 h-12`} />
                <div>{author.name}</div>
            </div>
        {/each}
    </div>

    <div class={`not-prose mt-10`}>
        <h2>Downloads</h2>
        {#each publication.downloads as download}
            <div class={`flex gap-4 items-center`}>
                <a href={`${download.url}`} class={`underline`}>
                    {download.title}
                </a>
            </div>
        {/each}
    </div>

    {#if !summary}
        <PortableText value={publication.body} />
    {/if}

    <div class={`not-prose mt-10`}>
        <h2>Categories</h2>
        {#each publication.categories as category}
            <div class={`flex gap-4 items-center`}>
                <a href={`/categories/${category.slug.current}`} class={`underline`}>
                    {category.title}
                </a>
            </div>
        {/each}
    </div>
</div>

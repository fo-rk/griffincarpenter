<script>
    import { format } from 'date-fns';
    import LinkMark from '$lib/LinkMark.svelte';
    import { PortableText } from '@portabletext/svelte';
    let { value, summary } = $props();
</script>

{#if value.image}
    <img src={value.image.url} class={`w-full h-96 object-cover`} />
{/if}

<div class={`pad mx-auto container prose prose-custom prose-lg md:prose-xl lg:prose-2xl`}>
    <h4>
        {format(value.publishedAt, 'dd.MM.yy')}
    </h4>

    <h1>{value.title}</h1>

    <div class={`not-prose`}>
        {#each value.authors as author}

            <div class={`flex gap-4 items-center`}>
                <img src={author.image.url} class={`w-12 h-12`} />
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
</div>

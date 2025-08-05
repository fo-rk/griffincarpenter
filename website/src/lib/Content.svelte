<script>
    import LinkMark from '$lib/LinkMark.svelte';
    import {PortableText} from '@portabletext/svelte';
    let { value: blocks } = $props();
</script>

{#each blocks as block}
    {#if block._type === 'textBlock'}
        <PortableText value={block.text} components={{
            marks: {
                internalLink: LinkMark,
                externalLink: LinkMark
            },
        }} />
    {/if}
{/each}

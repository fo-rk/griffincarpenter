<script>
    import { PortableText } from '@portabletext/svelte';
    import { slugPrefixFromType } from "$lib";
    let {children, portableText} = $props();
    let href = $state();
    let target = $state('_self');
    let prefix = $state();

    if (portableText.value._type === 'internalLink') {
        //let prefix;
        //const { type, subtype } = portableText.value;
        href = `/${slugPrefixFromType(portableText.value?.reference)}${portableText.value?.reference?.slug?.current}`;
    } else {
        href= `${portableText.value?.url}`
        target = '_blank';
    }
</script>

{#if href}
    <a href={href} target={target}>
        {@render children()}
    </a>
{:else}
    {@render children()}
{/if}

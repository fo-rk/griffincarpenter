<script>
  import FeaturedLink from '$lib/FeaturedLink.svelte';
  import ImageBlock from '$lib/ImageBlock.svelte';
  import LinkMark from '$lib/LinkMark.svelte';
  import {PortableText} from '@portabletext/svelte';
  let { value } = $props();
</script>

<div>
    <PortableText value={value} components={{
        types: {
            image: ImageBlock,
            featuredLink: FeaturedLink
        },
        marks: {
            internalLink: LinkMark,
            externalLink: LinkMark
        },
    }} />
</div>

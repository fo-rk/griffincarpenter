<script>
    let { portableText } = $props();
</script>

<figure class={`flex flex-col gap-2 items-end not-prose my-10`}>
    <img src={`${portableText.value.url}?w=1200`} />
    {#if portableText.value.credit}
        <figcaption class={`uppercase text-sm opacity-50`}>
            Image: {portableText.value.credit}
        </figcaption>
    {/if}
</figure>

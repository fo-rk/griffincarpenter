<script>
    import { slugPrefixFromType } from '$lib';
    let { data } = $props();
    let { docs, category } = $derived(data);
</script>

<div class={`prose prose-custom prose-lg md:prose-xl lg:prose-2xl pad`}>
    <h1>{category.title}</h1>

    <div class={`flex flex-col gap-5`}>
        {#each docs as doc}
            <a href={`/${slugPrefixFromType(doc)}${doc.slug.current}`} class={`block`}>
                {doc.title}
            </a>
        {/each}
    </div>
</div>

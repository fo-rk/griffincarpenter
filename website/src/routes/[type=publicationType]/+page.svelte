<script>

    let { data } = $props();
    let { publications } = $derived(data);
</script>

<div>
    {#each publications as publication}
        <a href={`/${publication.type}s/${publication.slug.current}`}>
            {publication.title}
        </a>
    {/each}
</div>

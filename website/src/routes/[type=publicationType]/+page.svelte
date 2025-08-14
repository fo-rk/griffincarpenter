<script>

    let { data } = $props();
    let { publications } = $derived(data);
</script>

<div class={`flex flex-col gap-8 m-10`}>
    <h1>Reports</h1>
    {#each publications as publication}
        <a href={`/${publication.type}s/${publication.slug.current}`}>
            {publication.title}
        </a>
    {/each}
</div>

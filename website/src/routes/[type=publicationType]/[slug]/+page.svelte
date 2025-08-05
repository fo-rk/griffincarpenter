<script>
    import Publication from "$lib/Publication.svelte";
    let { data } = $props();
    let { publication } = $derived(data);
</script>

<div class={``}>
    <Publication value={publication} />
</div>

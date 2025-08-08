<script>
  import Page from '$lib/Page.svelte';
  let { data } = $props();
</script>

<div class={`p-5 md:p-10 lg:p-20`}>
    <Page value={data.page} />
</div>

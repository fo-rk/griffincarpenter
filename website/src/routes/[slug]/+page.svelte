<script>
  import Page from '$lib/Page.svelte';
  let { data } = $props();
  console.log(data)
</script>

<div class={`p-5 md:p-10 lg:p-20`}>
    <Page value={data.page} />
</div>

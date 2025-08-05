<script>
  import Post from '$lib/Post.svelte';
  let { data } = $props();
</script>

<div class={``}>
    <Post value={data.post} />
</div>

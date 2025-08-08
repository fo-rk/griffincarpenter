<script>
  let { data } = $props();
  let { categories } = $derived(data);
</script>

<div class={`prose prose-custom prose-lg md:prose-xl lg:prose-2xl pad`}>
  <h1>Categories</h1>

  <div class={`flex flex-col gap-3`}>
      {#each categories as category}
        <div>
          <a href={`/categories/${category.slug.current}`}>
              {category.title}
          </a>
          <small class={`text-blue-mid`}>{category.numRefs} entries</small>
        </div>
      {/each}
  </div>
</div>

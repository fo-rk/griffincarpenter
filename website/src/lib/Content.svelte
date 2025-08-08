<script>
  import TextBlock from "./TextBlock.svelte";
  let { value: blocks } = $props();
</script>

<div class={``}>
    <div class={`flex flex-col divide-y divide-blue-light divide-y-8`}>
        {#each blocks as block}
            {#if block._type === 'textBlock'}
              <TextBlock value={block.text} />
            {/if}
        {/each}
    </div>
</div>

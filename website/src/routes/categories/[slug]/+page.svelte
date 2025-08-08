<script>
  import { format } from 'date-fns';
  import { slugPrefixFromType, typeFromDoc } from '$lib';
  let { data } = $props();
  let { docs, category } = $derived(data);
</script>

<div class={`prose prose-custom prose-lg md:prose-xl lg:prose-2xl pad mx-auto`}>
    <h1>{category.title}</h1>

    <div class={`flex flex-col gap-10`}>
        {#each docs as doc}
            <div class={`flex flex-col md:flex-row gap-4`}>
                <div class={`w-1/4`}>
                    {format(doc.publishedAt, 'dd.MM.yyyy')}
                </div>
                <a href={`/${slugPrefixFromType(doc)}${doc.slug.current}`} class={`w-2/3 block text-balance`}>
                    {doc.title}
                </a>
                {typeFromDoc(doc)}
            </div>
        {/each}
    </div>

</div>

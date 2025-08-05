<script>
    import { slugPrefixFromType } from '$lib';
    import { format } from 'date-fns';
    let { data } = $props();
    let { publications } = $derived(data);
</script>

<div class={`prose prose-custom prose-lg md:prose-xl lg:prose-2xl pad flex flex-col gap-5`}>
    <h1>Publications</h1>
    {#each publications as publication}
        <div class={`flex gap-4`}>
            <div class={`w-1/3`}>
                {format(publication.publishedAt, 'dd.MM.yyyy')}
            </div>
            <a href={`/${slugPrefixFromType(publication)}${publication.slug.current}`} class={`w-2/3 block text-balance`}>
                {publication.title}
            </a>
            {publication.type}
        </div>
    {/each}
</div>

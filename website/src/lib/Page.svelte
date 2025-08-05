<script>
    import { format } from 'date-fns';
    import Content from '$lib/Content.svelte'
    let { value } = $props();
</script>

<div class={`mx-auto container prose prose-gc prose-lg md:prose-xl lg:prose-2xl`}>
    <h1>{value.title}</h1>
    <div>
        {#each value?.authors as author}
            <div>
                {author.name}
            </div>
        {/each}
    </div>
    <Content value={value.content} />
</div>

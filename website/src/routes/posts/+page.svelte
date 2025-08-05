<script>
    import { format } from 'date-fns';
    let { data } = $props();
    let { posts } = $derived(data);
</script>

<div class={`prose prose-custom prose-lg md:prose-xl lg:prose-2xl pad flex flex-col gap-5`}>
    <h1>Posts</h1>
    {#each posts as post}
        <div class={`flex gap-4`}>
            <div class={`w-1/3`}>
                {format(post.publishedAt, 'dd.MM.yyyy')}
            </div>
            <a href={`/posts/${post.slug.current}`} class={`w-2/3 block text-balance`}>
                {post.title}
            </a>
        </div>
    {/each}
</div>

<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import TextBlock from "$lib/TextBlock.svelte";
	import { onNavigate } from '$app/navigation';
	let { children, data } = $props();
	let { settings } = $derived(data);
	let menuOpen = $state(false);

	console.log(settings.description)

	onNavigate(() => {
	    menuOpen = false;
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class={`flex flex-col min-h-screen`}>
    <div class={`p-5 border-b border-blue-light flex justify-between`}>
        <a href={`/`}>
            <img
                alt={`${settings.title} logo`}
                src={settings.logo.url}
                class={`h-24`}
            />
        </a>
    </div>
    <div class={`grow`}>
        {@render children?.()}
    </div>
    <div class={`bg-blue-light p-5 md:p-20 md:py-10 flex flex-col md:flex-row gap-10`}>
        <div class={`lg:w-1/2 prose prose-custom prose-lg md:prose-xl lg:prose-2xl`}>
            <a href={`/`} class={`not-prose`}>
                <img
                    alt={`${settings.title} logo`}
                    src={settings.logo.url}
                    class={`h-24`}
                />
            </a>
            <TextBlock value={settings.description} />
        </div>
        <div class={`flex flex-col gap-3 prose prose-custom prose-lg md:prose-xl lg:prose-2xl`}>
            {#each settings.menu as item}
                <a href={`/${item.page.slug.current}`}>
                    {item.page.title}
                </a>
            {/each}
            <a href={`/posts`}>Posts</a>
            <a href={`/publications`}>Publications</a>
            <a href={`/categories`}>Categories</a>
        </div>
    </div>
</div>


    <button
        onclick={() => {
            menuOpen = !menuOpen
        }}
        class={`
            absolute top-0 right-0 z-10
            m-8 my-12 text-3xl cursor-pointer
            hover:text-blue-mid
        `}
    >
        {menuOpen ? `Close` : `Menu`}
    </button>


{#if menuOpen}
    <div class={`
        absolute top-0 left-0 w-full h-screen
        bg-blue-light p-10 text-4xl
    `}>
        <div class={`flex flex-col gap-5`}>
            <a href={`/`} class={`font-bold`}>
                <img
                    alt={`${settings.title} icon`}
                    src={settings.icon.url}
                    class={`h-24`}
                />
            </a>
            {#each settings.menu as item}
                <a href={`/${item.page.slug.current}`}>
                    {item.page.title}
                </a>
            {/each}
            <a href={`/posts`}>Posts</a>
            <a href={`/publications`}>Publications</a>
            <a href={`/categories`}>Categories</a>
        </div>
    </div>
{/if}

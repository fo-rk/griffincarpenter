<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import TextBlock from "$lib/TextBlock.svelte";
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	let { children, data } = $props();
	let { settings } = $derived(data);
	let menuOpen = $state(false);

	onNavigate(() => {
	    menuOpen = false;
	});
</script>

<svelte:head>
    <link rel="icon" href={favicon} />

    {#if $page.data.title}
        <title>{$page.data.title} – {settings.title}</title>
        <meta name="title" content={`${$page.data.title} – ${settings.title}`} />
        <meta property="og:title" content={`${$page.data.title} – ${settings.title}`} />
        <meta property="twitter:title" content={`${$page.data.title} – ${settings.title}`} />
    {:else}
        <title>{settings.title}</title>
        <meta name="title" content={settings.title} />
        <meta property="og:title" content={settings.title} />
        <meta property="twitter:title" content={settings.title} />
    {/if}

    {#if $page.data.description}
        <meta name="description" content={$page.data.description} />
        <meta property="og:description" content={$page.data.description} />
        <meta property="twitter:description" content={$page.data.description} />
    {:else}
        <meta name="description" content={settings.plainDescription} />
        <meta property="og:description" content={settings.plainDescription} />
        <meta property="twitter:description" content={settings.plainDescription} />
    {/if}

    {#if $page.data.slug}
        <meta property="og:url" content={`${settings.url}/${$page.data.slug}`} />
        <meta property="twitter:url" content={`${settings.url}/${$page.data.slug}`} />
    {:else}
        <meta property="og:url" content={settings.url} />
        <meta property="twitter:url" content={settings.url} />
    {/if}

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="og:type" content="website" />

    {#if $page.data.image}
        <meta property="og:image" content={$page.data.image} />
        <meta property="twitter:image" content={$page.data.image} />
    {:else}
        <meta property="og:image" content={settings.socialImage.url + '?w=1200'} />
        <meta property="twitter:image" content={settings.socialImage.url + '?w=1200'} />
    {/if}
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

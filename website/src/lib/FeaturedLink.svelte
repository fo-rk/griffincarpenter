<script>
    import { typeFromDoc, slugPrefixFromType } from '$lib';
    import { format } from 'date-fns';
    let { portableText } = $props();
</script>

<a href={`/${slugPrefixFromType(portableText.value.doc)}${portableText.value.doc.slug.current}`} class={` bg-blue-light/50 hover:bg-blue-light not-prose flex my-10`}>
    {#if portableText.value.doc.image}
        <img src={`${portableText.value.doc.image.url}`} class={`w-1/3`} />
    {/if}
    <div class={`flex flex-col p-5 md:p-10`}>
        <div>
            {format(portableText.value.doc.publishedAt, 'dd.MM.yyyy')}
        </div>
        <h3 class={`text-3xl font-semibold`}>
            {portableText.value.doc.title}
        </h3>
        <div>
            {typeFromDoc(portableText.value.doc)}
        </div>
    </div>
</a>

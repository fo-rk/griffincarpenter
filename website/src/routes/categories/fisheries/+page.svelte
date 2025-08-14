<script>
    import { format } from 'date-fns';
    import { slugPrefixFromType, typeFromDoc } from "$lib";
    import { beforeNavigate } from '$app/navigation';
    let { data } = $props();
    let { page } = $derived(data);

    beforeNavigate(() => {
        document.body.style.height = '';
		document.body.style.overflow = '';
    });

    let selectedQuestion = $state(null);

    const colors = {
        advice: {
            bg: 'bg-blue-light/95',
            divide: 'divide-blue-light'
        },
        process: {
            bg: 'bg-red-light/95',
            divide: 'divide-red-light'
        },
        product: {
            bg: 'bg-yellow-mid/95',
            divide: 'divide-yellow-mid'
        }
    }

    $effect(() => {
        if (selectedQuestion) {
            document.body.style.height = '100vh';
    		document.body.style.overflow = 'hidden';
        } else {
            document.body.style.height = '';
			document.body.style.overflow = '';
        }
    })
</script>

<div class={`${selectedQuestion ? `h-screen overflow-hidden` : ``}`}>
    <div class={`p-5 lg:p-10 text-2xl lg:text-3xl`}>
        <h1 class={`font-bold`}>{page.title}</h1>
        <div class={`md:text-md lg:text-xl my-2`}>
            Showing the
            <span class={`bg-blue-light p-1 py-0`}>advice</span>,
            the <span class={`bg-red-light p-1 py-0`}>processes</span>
            and <span class={`bg-yellow-mid p-1 py-0`}>products</span>
            of the industry.
        </div>
    </div>

    <div class={`flex flex-col mx-auto`}>
        {#each page.sections as section, i}
            {@const url = `/img/fisheries/${i+1}join.png`}
            <div class={`flex flex-col md:flex-row items-start`}>
                <div class={`w-full md:w-1/4 shrink-0`}>
                    <div class={`p-5 lg:p-10 border border-dotted md:border-none mx-5 md:mx-10 lg:m-0`}>
                        <div class={`font-bold`}>{section.title}</div>
                        <div>{section.subtitle}</div>
                    </div>
                </div>
                <div>
                    <img src={`/img/fisheries/${i+1}.png`} />
                    <div class={`w-full bg-repeat-y bg-contain`} style={`background-image: url('${url}');`}>
                        <div class={`p-10 pt-10 grid gap-10 md:grid-cols-2`}>
                            {#each section.questions as question}
                                <div onclick={() => question.topics?.length ? selectedQuestion = { ...question, stage: section.stage } : false} class={`
                                    cursor-pointer ${colors[section.stage].bg}
                                    hover:scale-105 transition-all p-5 px-7
                                `}>
                                    <div class={`font-sans text-xl`}>
                                        {question.title}
                                    </div>
                                    {#if question.topics?.length}
                                        <div class={`font-normal opacity-50`}>
                                            See {question.topics.length || 0} topics
                                        </div>
                                    {/if}
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>

            </div>
        {/each}
    </div>
</div>

{#if selectedQuestion}
    <div class={`w-full h-screen overflow-y-scroll fixed top-0 left-0 ${colors[selectedQuestion.stage].bg} z-90`}>
        <div class={`m-5 md:m-10 lg:m-20 flex flex-col justify-start items-start gap-10`}>
            <button onclick={() => selectedQuestion = null} class={`cursor-pointer text-2xl flex items-center gap-2`}>
                <svg class={`w-8 h-8`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>
                Back
            </button>
            <h1 class={`lg:text-3xl font-bold`}>{selectedQuestion.title}</h1>
            <div class={`grid md:grid-cols-2 gap-10`}>
                {#each selectedQuestion.topics as topic}
                    <div class={`bg-white flex flex-col divide-y ${colors[selectedQuestion.stage].divide}`}>
                        <div class={`p-5`}>
                            {topic.title}
                        </div>
                        {#each topic.documents as document}
                            <a href={`/${slugPrefixFromType(document)}${document.slug.current}`} class={`p-5`}>
                                <div class={`font-sans text-xl font-semibold text-balance`}>
                                    {document.title}
                                </div>
                                <div>
                                    {typeFromDoc(document)} ∙
                                    {#if document.publishedAt}
                                        {format(document.publishedAt, 'MMM yyyy')}
                                    {/if}
                                </div>
                            </a>
                        {/each}
                        {#if !topic.documents?.length}
                            <div class={`p-5`}>
                                No current posts
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    </div>
{/if}

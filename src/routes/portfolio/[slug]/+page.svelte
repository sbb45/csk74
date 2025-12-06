<script lang="ts">
    import Button from "$lib/components/ui/Button.svelte";

    export let data;
    const project = data.project;
</script>

<svelte:head>
    <title>{project.title} — Портфолио</title>
    <meta name="description" content={project.shortDesc || "Подробности проекта"} />
</svelte:head>

<section class="mt-24 px-2 xl:px-32">
    <div class="relative mb-10 overflow-hidden rounded-b-xl xl:rounded-b-3xl xl:max-h-[70vh]">
        <img
                src={project.image}
                alt={project.title}
                class="aspect-[16/9] w-full object-cover h-[50vh] xl:h-auto"
        />

        <div class="absolute inset-0 bg-black/40"></div>

        <div class="absolute bottom-6 left-6 text-white">
            <h1 class="font-bounded text-3xl md:text-5xl">{project.title}</h1>

            <p class="mt-2 text-sm md:text-base text-white/90">
                {project.location}{project.location && project.date ? " · " : ""}{project.date}
            </p>

            {#if project.area}
                <p class="mt-1 text-sm md:text-base text-white/90">
                    Площадь: {project.area} м²
                </p>
            {/if}
        </div>
    </div>

    <!-- ОСНОВНОЙ ТЕКСТ -->
    {#if project.description}
        <div class="mx-auto max-w-3xl px-2 md:px-0">
            <h2 class="mb-3 font-bounded text-2xl">Описание проекта</h2>

            <p class="text-gray-700 leading-relaxed">
                {project.description}
            </p>
        </div>
    {/if}

    <!-- ГАЛЕРЕЯ -->
    {#if project.gallery?.length}
        <div class="mt-12">
            <h2 class="mb-4 text-center font-bounded text-2xl">Галерея</h2>
            <div class="grid gap-4 px-2 md:grid-cols-3 lg:grid-cols-4">
                {#each project.gallery as img}
                    <div class="overflow-hidden rounded-[20px]">
                        <img
                                src={img}
                                alt=""
                                class="w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                {/each}
            </div>
        </div>
    {/if}

    <!-- ХАРАКТЕРИСТИКИ -->
    <div class="mx-auto mt-16 max-w-3xl px-2 md:px-0">
        <h2 class="mb-4 font-bounded text-2xl">Характеристики</h2>

        <div class="grid gap-4 sm:grid-cols-2">
            {#if project.area}
                <div class="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                    <p class="text-gray-500 text-sm">Площадь</p>
                    <p class="text-xl font-bounded">{project.area} м²</p>
                </div>
            {/if}

            {#if project.floors}
                <div class="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                    <p class="text-gray-500 text-sm">Этажность</p>
                    <p class="text-xl font-bounded">{project.floors}</p>
                </div>
            {/if}

            {#if project.tech}
                <div class="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                    <p class="text-gray-500 text-sm">Технология</p>
                    <p class="text-xl font-bounded">{project.tech}</p>
                </div>
            {/if}

            {#if project.foundation}
                <div class="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                    <p class="text-gray-500 text-sm">Фундамент</p>
                    <p class="text-xl font-bounded">{project.foundation}</p>
                </div>
            {/if}
        </div>
        <Button
                text="Обсудить ваш проект"
                href="/"
                className="mt-14! mx-auto w-80! 2xl:mt-82 2xl:w-84! 3xl:min-w-94"
        />
    </div>

</section>

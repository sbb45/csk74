<script lang="ts">
    export let data;
    const projects = data.projects || [];
</script>

<svelte:head>
    <title>Портфолио — sha&vi</title>
    <meta
            name="description"
            content="Портфолио sha&vi: реализованные проекты каркасных домов в Челябинске и области. Фото готовых домов, планировки, площади и особенности строительства."
    />
</svelte:head>

<main class="mt-24">
    <section id="about" class="px-4 lg:px-24 xl:px-30 3xl:max-w-[2000px]!">
        <div>
            <h2 class="title-section">Наши проекты</h2>
            <h3 class="desc-section md:pl-48 lg:pl-10 xl:pl-40 2xl:pl-100">За которые нас выбирают</h3>
        </div>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {#each projects as project (project.id)}
                <a
                        href={`/portfolio/${project.slug}`}
                        class="group block h-full"
                >
                    <div
                            class="flex h-full flex-col overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md"
                    >
                        <!-- Картинка -->
                        <div class="relative aspect-[4/3] overflow-hidden">
                            <img
                                    src={project.image}
                                    alt={project.title}
                                    class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {#if project.type}
                        <span
                                class="pointer-events-none absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white"
                        >
                            {project.type}
                        </span>
                            {/if}
                        </div>

                        <!-- Контент -->
                        <div class="flex flex-1 flex-col gap-2 px-4 py-4 md:px-5 md:py-5">
                            <h3 class="font-bounded text-lg leading-tight md:text-xl">
                                {project.title}
                            </h3>

                            <p class="text-xs text-gray-500 md:text-sm">
                                {#if project.location}{project.location} · {/if}
                                {#if project.area}{project.area} м² · {/if}
                                {project.date}
                            </p>

                            {#if project.shortDesc}
                                <p class="mt-1 line-clamp-2 text-sm text-gray-600">
                                    {project.shortDesc}
                                </p>
                            {/if}

                            <div class="mt-3 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-[#F05A28]">
                                <span>Смотреть проект</span>
                                <span class="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                            </div>
                        </div>
                    </div>
                </a>
            {/each}
        </div>

    </section>
</main>


<script lang="ts">
    const stats = [
        { label: "Построено домов", value: "7+" },
        { label: "Собственные проекты", value: "3" },
        { label: "Срок строительства", value: "3–4 мес." },
        { label: "Типичная площадь", value: "100–120 м²" }
    ];

    const values = [
        {
            title: "Прозрачная смета",
            text: "Фиксируем стоимость до начала работ. Расписываем этапы и материалы без скрытых позиций."
        },
        {
            title: "Аккуратная стройка",
            text: "Соблюдаем технологию каркасного строительства, следим за геометрией и узлами."
        },
        {
            title: "Честное общение",
            text: "Говорим по делу и по-простому, сразу обозначаем риски и варианты решений."
        }
    ];

    const steps = [
        {
            title: "Заявка и знакомство",
            text: "Вы оставляете контакты, кратко описываете участок и пожелания по дому."
        },
        {
            title: "Обсуждение и концепция",
            text: "Обсуждаем планировку, конструктив и бюджет, предлагаем варианты решения."
        },
        {
            title: "Смета и договор",
            text: "Формируем понятную смету, согласуем сроки и фиксируем всё в договоре."
        },
        {
            title: "Стройка и отчётность",
            text: "Ведём работы по этапам, отправляем фото и видео, держим вас в курсе."
        },
        {
            title: "Сдача дома и поддержка",
            text: "Принимаем дом по чек-листу, даём гарантию и остаёмся на связи дальше."
        }
    ];

    const benefits = [
        {
            title: "Фокус на качестве",
            text: "Не гонимся за количеством объектов. Важнее, чтобы каждый дом был продуман и надёжен."
        },
        {
            title: "Контроль на каждом этапе",
            text: "От фундамента до отделки следим за технологией, материалами и сроками."
        },
        {
            title: "Дом «под ключ»",
            text: "Берём на себя все этапы: проект, фундамент, коробка, кровля, инженерия, отделка."
        },
        {
            title: "Комфорт в эксплуатации",
            text: "Думаем не только о том, как построить, но и о том, как домом будет удобно пользоваться."
        }
    ];
</script>

<svelte:head>
    <title>О компании — sha&vi</title>
    <meta
            name="description"
            content="Строим каркасные дома под ключ: честная смета, аккуратная стройка и понятные сроки. Узнайте больше о подходе Центра Силового Каркаса."
    />
</svelte:head>

<main class="mt-32 font-manrope">
    <!-- HERO (оставляем, чуть подчистил вёрстку) -->
    <section class="mb-4">
        <div class="mx-auto max-w-6xl px-2 md:px-4 lg:px-6">
            <div class="relative overflow-hidden rounded-[32px] bg-[#202020] text-white">
                <div class="grid gap-8 px-6 py-10 md:grid-cols-[1.3fr,1fr] md:px-10 md:py-12 lg:px-14 lg:py-14">
                    <div>
                        <p class="text-xs uppercase tracking-[0.22em] text-white/60">
                            О КОМПАНИИ
                        </p>
                        <h1 class="mt-3 font-bounded text-3xl leading-tight md:text-4xl lg:text-5xl">
                            Строим каркасные дома,<br class="hidden md:block" />
                            в которые хочется въехать сразу
                        </h1>
                        <p class="mt-4 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
                            sha&vi — строительная команда, которая занимается каркасными домами под ключ.
                            Берём ограниченное число объектов, чтобы держать под контролем качество, сроки и бюджет.
                        </p>
                        <p class="mt-3 text-sm text-white/70 md:text-[15px]">
                            Без лишних обещаний и навязанных услуг — только понятные этапы работ и честные договорённости.
                        </p>
                    </div>

                    <div class="flex flex-col justify-between gap-6">
                        <div class="grid grid-cols-2 gap-3">
                            {#each stats as item}
                                <div class="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                                    <p class="text-xs text-white/60">{item.label}</p>
                                    <p class="mt-1 font-bounded text-xl md:text-2xl">
                                        {item.value}
                                    </p>
                                </div>
                            {/each}
                        </div>

                        <div class="rounded-2xl bg-white text-[#202020] px-4 py-3 md:px-5 md:py-4">
                            <p class="text-[11px] font-medium uppercase tracking-[0.18em] text-[#F05A28]">
                                ЧТО МЫ ДЕЛАЕМ
                            </p>
                            <p class="mt-1 text-sm leading-relaxed">
                                Проектируем и строим каркасные дома под ключ: от фундамента и коробки до
                                инженерии и отделки. Подбираем решения под участок и задачи семьи.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- БЛОК 2. КТО МЫ + КРАТКИЙ ПОРТРЕТ КОМПАНИИ -->
    <section class="mb-4">
        <div class="mx-auto max-w-6xl px-2 md:px-4 lg:px-6">
            <div class="grid gap-10 lg:grid-cols-[1.2fr,1fr] items-start">
                <div>
                    <p class="text-xs uppercase tracking-[0.22em] text-gray-500">
                        КТО МЫ
                    </p>
                    <h2 class="mt-3 font-bounded text-2xl md:text-3xl lg:text-[34px] lg:leading-tight">
                        Команда, которая аккуратно<br class="hidden md:block" />
                        относится к каждому дому
                    </h2>
                    <p class="mt-4 text-sm leading-relaxed text-gray-700 md:text-[15px] max-w-xl">
                        Мы подходим к каждому проекту как к долгосрочному. Продумываем конструктив, узлы,
                        утепление и эксплуатацию, а не только фасад. В диалоге говорим по-простому
                        и держим вас в курсе, что происходит на объекте.
                    </p>
                    <p class="mt-3 text-sm leading-relaxed text-gray-700 md:text-[15px] max-w-xl">
                        Наша задача — чистая работа и результат, за который не стыдно через годы. Поэтому
                        не раздуваем объёмы и не берём на себя десятки объектов одновременно.
                    </p>

                    <!-- мини-строка в стиле главной -->
                    <div class="mt-6 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/40 bg-white px-4 py-2">
                        <span class="h-2 w-2 rounded-full bg-[#F05A28]"></span>
                        <span class="text-xs font-medium uppercase tracking-[0.18em] text-gray-700">
                            каркасные дома под ключ
                        </span>
                    </div>
                </div>

                <!-- справа карточка с ключевыми тезисами -->
                <div class="rounded-[28px] border border-black/5 bg-white p-5 shadow-sm lg:p-6">
                    <p class="text-[11px] font-medium uppercase tracking-[0.18em] text-gray-500">
                        ЧТО ДЛЯ НАС ВАЖНО
                    </p>
                    <ul class="mt-4 space-y-4">
                        {#each values as value}
                            <li class="flex gap-3">
                                <span class="mt-2 h-[3px] w-6 rounded-full bg-[#F05A28]"></span>
                                <div>
                                    <h3 class="font-bounded text-sm md:text-[15px]">
                                        {value.title}
                                    </h3>
                                    <p class="mt-1 text-sm leading-relaxed text-gray-700">
                                        {value.text}
                                    </p>
                                </div>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- БЛОК 3. НАШИ ПРИНЦИПЫ / СИЛЬНЫЕ СТОРОНЫ (МОЗАИКА КАРТОЧЕК) -->
    <section class="mb-18">
        <div class="mx-auto max-w-6xl px-2 md:px-4 lg:px-6">
            <div class="mb-8 text-center">
                <p class="text-xs uppercase tracking-[0.22em] text-gray-500">
                    ПОДХОД К СТРОЙКЕ
                </p>
                <h2 class="mt-3 font-bounded text-2xl md:text-3xl">
                    На чём строится наше качество
                </h2>
                <p class="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-700 md:text-[15px]">
                    Всё, что мы делаем на объекте, опирается на несколько простых принципов. Они помогают
                    держать дом тёплым, смету — честной, а стройку — предсказуемой.
                </p>
            </div>

            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {#each benefits as benefit, i}
                    <div
                            class={`rounded-[26px] border p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1
                        ${i === 1 || i === 3
                            ? "border-black/80 bg-[#202020] text-white"
                            : "border-black/10 bg-white text-gray-900"}`}
                    >
                        <p class="text-[11px] uppercase tracking-[0.18em] text-[#F05A28]">
                            {i + 1 < 10 ? `0${i + 1}` : i + 1}
                        </p>
                        <h3 class="mt-2 font-bounded text-base md:text-lg">
                            {benefit.title}
                        </h3>
                        <p class="mt-2 text-sm leading-relaxed {i === 1 || i === 3 ? "text-white/80" : "text-gray-700"}">
                            {benefit.text}
                        </p>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- БЛОК 4. ПРОЦЕСС РАБОТЫ (КАРТОЧКИ, А НЕ ВЕРТИКАЛЬНАЯ ЛИНИЯ) -->
    <section class="mb-18">
        <div class="mx-auto max-w-6xl px-2 md:px-4 lg:px-6">
            <div class="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                    <p class="text-xs uppercase tracking-[0.22em] text-gray-500">
                        ПРОЦЕСС
                    </p>
                    <h2 class="mt-2 font-bounded text-2xl md:text-3xl">
                        Как проходит работа над домом
                    </h2>
                </div>
                <p class="max-w-md text-sm leading-relaxed text-gray-700">
                    От первого сообщения до сдачи дома — последовательные шаги и понятные точки контроля.
                    Вы знаете, что мы делаем сейчас и что будет дальше.
                </p>
            </div>

            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {#each steps as step, i}
                    <div class="flex h-full flex-col rounded-[24px] border border-black/5 bg-white p-4 shadow-sm">
                        <div class="mb-2 flex items-center justify-between">
                            <span class="text-[11px] uppercase tracking-[0.18em] text-gray-500">
                                Шаг {i + 1}
                            </span>
                            <span class="rounded-full bg-[#F3F1EF] px-3 py-1 text-[11px] font-semibold text-[#F05A28]">
                                {i + 1}/{steps.length}
                            </span>
                        </div>
                        <h3 class="font-bounded text-base md:text-lg">
                            {step.title}
                        </h3>
                        <p class="mt-2 text-sm leading-relaxed text-gray-700">
                            {step.text}
                        </p>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- БЛОК 5. ГЕОГРАФИЯ + CTA В СТИЛЕ ГЛАВНОЙ -->
    <section>
        <div class="mx-auto max-w-6xl px-2 md:px-4 lg:px-6">
            <div class="grid gap-8 rounded-[32px] border border-black/5 bg-white px-5 py-8 shadow-sm md:grid-cols-[1.1fr,1fr] md:px-8 md:py-10">
                <div>
                    <p class="text-xs uppercase tracking-[0.22em] text-gray-500">
                        ГЕОГРАФИЯ
                    </p>
                    <h2 class="mt-2 font-bounded text-2xl md:text-3xl">
                        Челябинск и ближайшие районы
                    </h2>
                    <p class="mt-4 text-sm leading-relaxed text-gray-700 md:text-[15px] max-w-xl">
                        Строим дома в Челябинске и рядом с городом. Перед тем как назвать сроки и бюджет,
                        выезжаем на участок или подробно разбираем условия — так решения получаются честными
                        и рабочими.
                    </p>
                    <p class="mt-3 text-sm leading-relaxed text-gray-700 md:text-[15px] max-w-xl">
                        Если участок находится дальше, можем обсудить формат работы отдельно — важно, чтобы
                        мы могли держать тот же уровень контроля качества.
                    </p>
                </div>

                <div class="flex flex-col justify-between gap-4">
                    <div class="rounded-[24px] bg-[#202020] px-5 py-5 text-white">
                        <p class="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
                            ГОТОВЫ ОБСУДИТЬ ДОМ
                        </p>
                        <p class="mt-2 text-sm leading-relaxed text-white/90">
                            Расскажите о вашем участке и хотелках по дому — честно скажем, как можем помочь,
                            и предложим понятный план без навязчивых продаж.
                        </p>
                        <a
                                href="/"
                                class="mt-4 inline-flex items-center justify-center rounded-full bg-[#F05A28] px-6 py-3 font-bounded text-sm md:text-base text-white transition-transform duration-300 hover:-translate-y-0.5"
                        >
                            Обсудить проект
                        </a>
                    </div>

                    <p class="text-xs leading-relaxed text-gray-500">
                        Можно сразу написать в WhatsApp или Telegram — так быстрее обсудим исходные данные
                        и поймём, подойдём ли мы друг другу по задачам и формату работы.
                    </p>
                </div>
            </div>
        </div>
    </section>
</main>

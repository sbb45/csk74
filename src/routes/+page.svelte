<script>
import Hero from "./_sections/Hero.svelte";
import About from "./_sections/About.svelte";
import Portfolio from "./_sections/Portfolio.svelte";
import Service from "./_sections/Service.svelte";
import Contact from "./_sections/Contact.svelte";
import Faq from "./_sections/Faq.svelte";
import Review from "./_sections/Review.svelte";

</script>

<svelte:head>
    <title>Каркасные дома в Челябинске - Центр Силового Каркаса</title>
    <meta
            name="description"
            content="Строим каркасные дома под ключ в Челябинске: честная смета, прозрачный процесс и аккуратное выполнение работ. Проекты, строительство и сдача дома без сюрпризов."
    />
</svelte:head>

<main id="content-page">
    <Hero />
    <About />
    <Portfolio />
    <Service />
    <Faq />
    <Contact />
    <Review />
</main>
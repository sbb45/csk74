<script lang="ts">
    import plus from  "$lib/assets/icons/plus.svg"

    export let question: string = "";
    export let answer: string = "";
    export let isFirst = false;
</script>

<div class={`border-b border-black mx-2 ${isFirst ? 'border-t border-black' : ''}`}>
    <div class="px-2 h-18 flex justify-between items-center gap-8">
        <h4 class="font-bounded font-medium text-base leading-5">{question}</h4>
        <img src={plus} alt="Подробнее">
    </div>
</div>
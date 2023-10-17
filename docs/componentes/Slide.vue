<template>
    <div class="banner">
        <div class="fundo" :style="{color}">
            <h2 :style="{color: title}">Cabeleleira</h2>
            <p>
                Venha conhecer nossos serviços, temos os melhores profissionais da região.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import Tema from "../../color.json"

const props = defineProps<{
    tema: string
}>()

const style = props.tema || 0;

const title = Tema[style].$schema.Primary
const color = Tema[style].$schema.Text

</script>

<style>
.banner {
    background-image: url('https://picsum.photos/2000/1000');
    text-align: center;
    height: 75vh;
}

.banner .fundo {
    background-color: rgba(223, 223, 223, 0.5);
    height: 100%;
    color: black;
}

.banner h2 {
    font-size: 3rem;
    position: absolute;
    top: 8rem;
    left: 50%;
    transform: translate(-50%, -50%);
}

.banner p {
    font-size: 1.5rem;
    position: absolute;
    top: 18rem;
    left: 50%;
    transform: translate(-50%, -50%);
}

@media (max-width: 768px) {
    .banner h2 {
        top: 4rem;
        line-height: 1em;
    }

    .banner p {
        top: 14rem;
    }
}

</style>

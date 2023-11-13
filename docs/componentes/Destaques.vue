<template>
    <div :style="{background}">
        <h1 :style="{color: text}">Serviços em destaques</h1>
        <div class="cards" v-for="(servico, index) in servicos" :key="index">
            <div class="card">
                <div class="card__image-holder">
                    <img class="card_image" :src="servico.image" alt="wave">
                </div>
                <div class="card-title">
                    <h2 :style="{color:title}">{{servico.title}}</h2>
                </div>
                <div class="card-flap">
                    <div :style="{color: text}" class="card-description">{{ servico.description }}</div>
                    <div class="flap2">
                        <div class="card-actions">
                            <a href="/" class="btn">Entre em contato</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue"
import Tema from "../../color.json"

const props = defineProps<{
    tema: string
}>()


const style = props.tema || 0;

const background = Tema[style].$schema.Body
const title = Tema[style].$schema.Text
const text = Tema[style].$schema.Text

const servicos = ref([
    {
        title: "Corte de cabelo",
        image: "https://source.unsplash.com/300x225/?wave",
        description: "Corte de cabelo excepcional para mulheres, realçando sua beleza única. Agende hoje para uma transformação elegante!"
    },
    {
        title: "Alisamento",
        image: "https://source.unsplash.com/300x225/?wave",
        description: "Transforme seus cabelos com nosso alisamento profissional para um look elegante e impecável."
    },
    {
        title: "Escova",
        image: "https://source.unsplash.com/300x225/?wave",
        description: "Cabelos impecáveis com nossa escova profissional. Sinta-se linda em minutos!"
    },
    {
        title: "Progressiva",
        image: "https://source.unsplash.com/300x225/?wave",
        description: "Mude o visual com seus fios com nossa progressiva: cabelos lisos, brilhantes e livres de frizz em apenas uma visita!"
    }
])

</script>

<style>
h1 {
    text-align: center;
    font-size: 1.5rem;
    padding: 1rem 0;
}

h2 {
    font-size: 1.2rem;
    margin: 0.7rem 0rem !important;
    text-align: center;
}

.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

.card_title {
    padding: 1rem;
    text-align: center;
}

.card-flap {
    padding: 0.6rem;
}

.card__image-holder {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s;
}

.card {
    position: relative;
    width: 300px;
    height: 100%;
    margin: 1rem;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transform: translateZ(0);
    transition: transform 0.3s ease-out;
}

.card:hover {
    transform: scale(1.05);
}

.flap2 {
    padding: 8px 0px;
}
</style>

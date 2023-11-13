<template>
    <div :style="{background}" class="depoimentos">
        <h1 :style="{color: title}">Depoimentos</h1>
        <ul id="testimonials">
            <li v-for="depoimento in Depoimentos">
                <img :src="depoimento.imagem" width="140" />
                <h2 :style="{color: name}">{{ depoimento.name }}</h2>
                <div :style="{color: text}">
                    <p><span>{{ depoimento.title }}!!</span> {{ depoimento.text }}</p>
                    <div class="stars" v-for="i in depoimento.star">⭐</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import Tema from "../../color.json"

const props = defineProps<{
    tema: string
}>()
const style = props.tema || 0;

const background = Tema[style].$schema.White
const title = Tema[style].$schema.Primary
const text = Tema[style].$schema.Text
const name = Tema[style].$schema.Secondary

const Depoimentos = [
    {
        name: 'Evan You',
        title: 'Muito legal',
        text: 'Meu cabelo nunca esteve tão incrível! O salão realmente entende do que faz.',
        star: 5,
        imagem: 'https://picsum.photos/2000/1000'
    },
    {
        name: 'Joseph Smith',
        title: 'Adorei o atendimento',
        text: 'Excelente atendimento e profissionais talentosos. Sempre saio satisfeita!',
        star: 5,
        imagem: 'https://picsum.photos/2000/1000'
    },
    {
        name: 'John Doe',
        title: 'Muito bom',
        text: 'Fiquei apaixonada pelo meu novo corte. Obrigada, salão, por me transformar!',
        star: 4,
        imagem: 'https://picsum.photos/2000/1000'
    },
    {
        name: 'Jane Doe',
        title: 'Muito bom',
        text: 'A coloração que recebi aqui é impecável. Recomendo a todos!',
        star: 4,
        imagem: 'https://picsum.photos/2000/1000'
    }
]
</script>

<style>
.depoimentos {
    width: 100%;
    padding: 10px 0;
}

#testimonials {
    margin: 0 auto;
}


#testimonials li {
    border-top: 2px solid rgba(0, 0, 0, 0);
    clear: both;
    padding: 28px 0;
    list-style-type: none;

}

#testimonials li img {
    border: 5px solid transparent;
    float: left;
    box-shadow: 0 0 12px #333;
    transform: rotate(-5deg);
    margin: 0 22px 0 0;

}

#testimonials li:nth-child(2n) img {
    float: right;
    transform: rotate(5deg);
    margin: 0 0 0 2px;

}

#testimonials p {
    padding: 0 0 2px;

}

#testimonials li:first-child {
    border: none;

}

#testimonials div {
    overflow: none;
}

#testimonials div span {
    /* font: 16px Georgia, serif; */
    /* color: black; */
    text-transform: uppercase;
    padding: 0 0 0 2px;
    font-weight: bold;
}

#testimonials div .stars {
    float: right;
    font-size: 20px;
    margin: 0 0 0 2px;
}
</style>

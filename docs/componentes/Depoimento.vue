<template>
    <div class="depoimentos">
        <h2>Depoimentos</h2>
        <ul id="testimonials">
            <li v-for="depoimento in Depoimentos">
                <img :src="depoimento.imagem" width="140" />
                <h2>{{ depoimento.name }}</h2>
                <div>
                    <p><span>{{ depoimento.title }}!!</span> {{ depoimento.text }}</p>
                    <div class="stars" v-for="i in depoimento.star">⭐</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>

const Depoimentos = [
    {
        name: 'Evan You',
        title: 'Muito legal',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
        star: 5,
        imagem: 'https://picsum.photos/2000/1000'
    },
    {
        name: 'Joseph Smith',
        title: 'Adorei o atendimento',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
        star: 5,
        imagem: 'https://picsum.photos/2000/1000'
    },
    {
        name: 'John Doe',
        title: 'Muito bom',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
        star: 4,
        imagem: 'https://picsum.photos/2000/1000'
    },
    {
        name: 'Jane Doe',
        title: 'Muito bom',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
        star: 4,
        imagem: 'https://picsum.photos/2000/1000'
    }
]
</script>

<style>
.depoimentos {
    width: 100%;
    margin: 10px auto;
    font: 15px Tahoma, Georgia, serif;
    background-color: #efefef;
    padding: 10px 0px;
}

#testimonials {
    width: 500px;
    margin: 0 auto;
    font: 15px Tahoma, Georgia, serif;
    color: #616161;
}

#testimonials h2 {
    font: 26px Georgia, serif;
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
    font: 16px Georgia, serif;
    color: black;
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

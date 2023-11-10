<template>
    <section id="1">
        <Banner :tema="tema" />
    </section>
    <section id="2">
        <Destaques :tema="tema" />
    </section>
    <section id="3">
        <Depoimento :tema="tema" />
    </section>
    <section id="4">
        <Contato :tema="tema" />
    </section>
    <section>
        <Footer :tema="tema" />
    </section>
</template>

<script setup>
import Banner from './componentes/Banner.vue'
import Destaques from './componentes/Destaques.vue'
import Depoimento from './componentes/Depoimento.vue'
import Contato from './componentes/Contato.vue'
import Footer from './componentes/Footer.vue'

const tema = window.location.search.slice(-1);

</script>

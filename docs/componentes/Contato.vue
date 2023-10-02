<template>
    <h2>Entre em contato</h2>
    <div class="redes">

        <a href="https://instagram.com">
            <img src="../assets/insta.png" alt="">
        </a>
        <a href="https://whatsapp.com">
            <img src="../assets/whats.png" alt="">
        </a>
    </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped>
h2 {
    font-size: 2rem;
    text-align: center;
    margin: 2rem 0;
}

.redes {
    display: flex;
    justify-content: center;
    align-items: center;
}

.redes img {
    width: 50px;
    margin: 0 1rem;
}
</style>

<template>
    <div class="banner">
        <div class="fundo">
            <h2>Titulo do Banner</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
    </div>
</template>

<script setup lang="ts">


</script>


<style>
.banner {
    background-image: url('https://picsum.photos/2000/1000');
    text-align: center;
    height: 75vh;
}

.banner .fundo {
    background-color: rgba(183, 183, 183, 0.5);
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

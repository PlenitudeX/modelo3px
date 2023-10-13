<template>
    <div :style="{background}">
        <h1 :style="{color: text}">Serviços em destaques</h1>
        <div class="cards">
            <div class="card">
                <div class="card__image-holder">
                    <img class="card__image" src="https://source.unsplash.com/300x225/?wave" alt="wave" />
                </div>
                <div class="card-title">
                    <h2 :style="{color: title}">Corte de cabelo</h2>
                </div>
                <div class="card-flap flap1">
                    <div :style="{color: text}" class="card-description">
                        This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when
                        they're not available etc.
                    </div>
                    <div class="card-flap flap2">
                        <div class="card-actions">
                            <a href="#formulario" class="btn">Entre em contato</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card__image-holder">
                    <img class="card__image" src="https://source.unsplash.com/300x225/?wave" alt="wave" />
                </div>
                <div class="card-title">
                    <h2 :style="{color: title}">Alisamento</h2>
                </div>
                <div class="card-flap flap1">
                    <div :style="{color: text}" class="card-description">
                        This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when
                        they're not available etc.
                    </div>
                    <div class="card-flap flap2">
                        <div class="card-actions">
                            <a href="#formulario" class="btn">Entre em contato</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card__image-holder">
                    <img class="card__image" src="https://source.unsplash.com/300x225/?wave" alt="wave" />
                </div>
                <div class="card-title">
                    <h2 :style="{color: title}">Escova</h2>
                </div>
                <div class="card-flap flap1">
                    <div :style="{color: text}" class="card-description">
                        This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when
                        they're not available etc.
                    </div>
                    <div class="card-flap flap2">
                        <div class="card-actions">
                            <a href="#formulario" class="btn">Entre em contato</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card__image-holder">
                    <img class="card__image" src="https://source.unsplash.com/300x225/?wave" alt="wave" />
                </div>
                <div class="card-title">
                    <h2 :style="{color: title}">Progressiva</h2>
                </div>
                <div class="card-flap flap1">
                   <div :style="{color: text}" class="card-description">
                        This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when
                        they're not available etc.
                    </div>
                    <div class="card-flap flap2">
                        <div class="card-actions">
                            <a href="#formulario" class="btn">Entre em contato</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Tema from "../../color.json"

const style = 0;

const background = Tema[style].$schema.Services.background
const title = Tema[style].$schema.Text?.title
const text = Tema[style].$schema.Text?.text
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
</style>

<template>
    <div class="contato" :style="{background}" >
        <h2 :style="{color: text}">Entre em contato</h2>
        <form :submit="enviar">
            <label for="Name">
                <input type="text" name="Name" id="Name" placeholder="Nome">
            </label>
            <label for="Email">
                <input type="email" name="email" id="email" placeholder="Email">
            </label>
            <label for="Mensagem">
                <textarea name="mensagem" id="mensagem" cols="30" rows="10" placeholder="Mensagem"></textarea>
            </label>
            <button :style="{background: buttonBackground, color: buttonColor}" @click="enviar" type="button">Enviar</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import Tema from "../../color.json"
import { ref } from "vue"

const props = defineProps<{
    tema: string
}>()

const style = props.tema || 0;


const background = Tema[style].$schema.Body
const text = Tema[style].$schema.Text
const buttonBackground = Tema[style].$schema.Secondary
const buttonColor = Tema[style].$schema.White

const Name = ref('')
const email = ref('')
const mensagem = ref('')

const enviar = () => {
    const nameValue = Name.value;
    const emailValue = email.value
    const mensagemValue = mensagem.value
    console.log(nameValue,'-', emailValue,'-', mensagemValue)
    Name.value = ''
    email.value = ''
    mensagem.value = ''
}
</script>

<style scoped>

.contato {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

input, textarea {
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 300px;
    max-width: 100%;
    font-size: 1rem;
    background-color: #fff;
}

button {
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    width: 300px;
    max-width: 100%;
    background-color: white;
}

h2 {
    padding: 10px;
    font-size: 2rem;
    text-align: center;
}

@media screen and (min-width: 768px) {
    #formulario {
        width: 768px;
        margin: 1rem auto;
    }

    form, input, textarea, h2 {
        width: 100%;
    }

    label {
        width: 90%;
    }
}
</style>

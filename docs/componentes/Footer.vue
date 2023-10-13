<template>
    <footer :style="{ background: background, color: text }" class="footer">
            <div>
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>Contato</h3>
                        <p>Endereço: Rua dos cabeleleiros, 123</p>
                        <p>Telefone: (11) 1234-5678</p>
                        <p>Email: contato@cabeleleiros.com</p>
                    </div>
                    <div class="footer-section">
                        <h3>Horário de Funcionamento</h3>
                        <p>Segunda a Sexta: 8h - 18h</p>
                        <p>Sábado: 9h - 12h</p>
                        <p>Domingo: Fechado</p>
                    </div>
                    <div class="socials">
                        <a href="https://instagram.com" target="_blank">
                            <img src="../assets/insta.png" alt="Instagram">
                        </a>
                        <a href="https://whatsapp.com" target="_blank">
                            <img src="../assets/whats.png" alt="Whatsapp">
                        </a>
                    </div>
                </div>
                <div :style="{background: buttonB}" class="footer-bottom">
                    &copy; 2023 Cabeleleira. Feito por <a :style="{ color: text }" href="https://www.instagram.com/plenitude_x/">Plenitudex</a>.
                </div>
            </div>
        </footer>
</template>

<script setup>
import temas from "../../color.json"

const style = 1;

const background = temas[style].$schema.Footer.background
const buttonB = temas[style].$schema.Footer.footerButton.background
const text = temas[style].$schema.Text.text

</script>

<style>
.footer {
    background-color: #E5E5E5;
    color: #333;
    padding: 20px 0 0;
    text-align: center;
}

.footer h3 {
    font-size: 36px;
    margin-bottom: 20px;
}

.footer p {
    font-size: 18px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.footer-section {
    flex: 1;
    margin: 0 20px;
}

.footer-bottom {
    /* background-color: #e5e5e5; */
    padding: 10px 5px;
    text-align: left;
}


.footer-bottom a:hover {
    color: #555;
}

.socials {
    margin-top: 20px;

}

.socials img {
    width: 2rem;
    margin: 10px 10px;
}

@media screen and (max-width: 700px) {
    .footer-content {
        flex-direction: column;
    }

    .footer-section {
        margin: 20px 0;
    }

    .socials {
        margin: 10px 0;
        display: flex;
        justify-content: center;
    }

    .socials img {
        margin: 0 10px;
    }

    .footer-bottom {
        text-align: center;
    }


}

</style>

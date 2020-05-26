<template>
  <div class="container">
    <div>
      <h1 class="title">
        Uso de SCSS en Nuxt
      </h1>
      <h2 class="subtitle">
        Asegúrate de tener las dependencias node-sass y sass-loader
      </h2>
      <p>Puedes configurar los scss tanto en nuxt-config como en las páginas, componentes y layouts</p>
      <p>Las fuentes también las configuras en nuxt-config (en el apartado de head>link)</p>
      <div class="links">
        <a
          href="https://nuxtjs.org/api/configuration-css/"
          target="_blank"
          class="button--green"
        >
          Info sobre SCSS y Nuxt
        </a>
        <a
          href="https://nuxtjs.org/faq/"
          target="_blank"
          class="button--grey"
        >
          Uso de fuentes externas
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">

@import "../assets/scss/variables";

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: $font-title;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: $font-color;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: $font-color;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

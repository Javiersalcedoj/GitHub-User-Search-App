<template>
  <div id="app">

    <header-app>
      <button-mode>
        <template v-slot:text>DARK</template>
        <template v-slot:icon><IconMoon /></template>
      </button-mode>
    </header-app>
    <main>
      <SearchBar />
      <CardInformation />
    </main>

  </div>
</template>

<script>
import ButtonMode from './components/ButtonMode.vue'
import CardInformation from './components/CardInformation.vue'
import HeaderApp from './components/HeaderApp.vue'
import SearchBar from './components/SearchBar.vue'
import IconMoon from './icon/IconMoon.vue'

export default {
  name: 'App',
  components: {
    HeaderApp,
    ButtonMode,
    IconMoon,
    SearchBar,
    CardInformation
  },
}
</script>

<style lang="scss">
  @use '@/styles/_global.scss' as *;

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: $font-family;
    font-size: 62.5%;
  }

  body {
    background-color: $primary-background-light;
    transition: 0.3s ease all;
  }
  .dark {
    background-color: $primary-background-dark;
  }

  @media (min-width: 768px) {
    body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 100vh ;
    }
  }

</style>
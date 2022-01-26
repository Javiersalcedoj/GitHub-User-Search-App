<template>
  <div id="app">
    <header-app>
      <ButtonMode 
        @changeModel="toggleDarkMode" :darkMode="darkMode"
      />
    </header-app>
    <main>
      <SearchBar @dataUser="dataUserArray"/>
      <CardInformation :data="dataUser"/>
    </main>
  </div>
</template>

<script>
import ButtonMode from "./components/ButtonMode.vue";
import CardInformation from "./components/CardInformation.vue";
import HeaderApp from "./components/HeaderApp.vue";
import SearchBar from "./components/SearchBar.vue";

export default {
  name: "App",

  components: {
    HeaderApp,
    ButtonMode,
    SearchBar,
    CardInformation,
  },

  data(){
    return {
      darkMode: false,
      dataUser: {},
    }
  },
  created(){
    this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  },
  watch: {
    darkMode(newValue){
      console.log('cambio')
      if(newValue){
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },

    dataUserArray(dataUser) {
      this.dataUser =  dataUser
    },
  }
}
</script>

<style lang="scss">
  @use "@/styles/_global.scss" as *;

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
<template>
  <div id="app">
    <header-app>
      <ButtonMode @changeModel="toggleDarkMode" :darkMode="darkMode" />
    </header-app>
    <main>
      <SearchBar @userName="userNameSearch" @errorInput="toggleError" :error ="error"/>
      <CardInformation :data="dataUser" />
    </main>
  </div>
</template>

<script>
import ButtonMode from "./components/ButtonMode.vue";
import CardInformation from "./components/CardInformation.vue";
import HeaderApp from "./components/HeaderApp.vue";
import SearchBar from "./components/SearchBar.vue";

import api from "./Api.js";

export default {
  name: "App",

  components: {
    HeaderApp,
    ButtonMode,
    SearchBar,
    CardInformation,
  },

  data() {
    return {
      dataUser: {},
      error: false,
      darkMode: false,
    };
  },

  watch: {
    darkMode(newValue) {
      if (newValue) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    },
  },

  created() {
    this.darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    this.searchUser("octocat");
  },

  methods: {
    searchUser(user) {
      api
        .getDataUser(String(user))
        .then((dataUser) => {
          if (dataUser.message) {
            this.error = true;
          } else {
            this.dataUser = dataUser;
          }
        })
        .catch(() => (this.error = true));
    },

    userNameSearch(userName){
      this.searchUser(userName)
    },

    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },

    toggleError(boolean) {
      this.error = boolean;
    }

  },
};
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
    min-height: 100vh;
  }
}
</style>

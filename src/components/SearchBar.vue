<template>
  <form
    @submit="sudmitUser"
    class="searchBar"
  >
    <div class="searchBar__container error">
      <span
        class="searchBar__icon"
        :class="error ? 'error' : ''"
      ></span>
      <input
        v-model="user"
        class="searchBar__input"
        type="text"
        placeholder="Search GitHub username…"
        spellcheck="false"
      >
      <span
        v-show="error"
        class="searchBar__error"
      >
        No reults
      </span>
    </div>
    <input class="searchBar__button" type="submit" value="Search">
  </form>
</template>

<script>
import api from "../Api.js";
export default {
  name:"SearchBar",
  data(){
    return {
      user: "",
      error: false,
    }
  },
  created(){
    this.searchUser('octocat')
  },
  methods: {
    sudmitUser(){
      event.preventDefault()
      this.error = false;
      if (this.user === ""){
        return this.error = true;
      }
      this.searchUser(this.user)

    },
    searchUser(user) {
      api.getDataUser(String(user))
        .then(dataUser => {
          if (dataUser.message){
            this.error = true
          } else {
            this.$emit('dataUser', dataUser)
          }
          })
        .catch(() => this.error = true)
        .finally(() => this.user = "")
    }
  }
}
</script>

<style lang="scss" scoped>
  @use "@/styles/_searchBar.scss"
</style>
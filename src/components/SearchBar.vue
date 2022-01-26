<template>
  <form @submit="sudmitUserName" class="searchBar">
    <div class="searchBar__container" :class="error ? 'error' : ''">
      <span class="searchBar__icon"></span>
      <input
        v-model="userName"
        class="searchBar__input"
        type="text"
        placeholder="Search GitHub username…"
        spellcheck="false"
      />
      <span v-show="error" class="searchBar__error"> No reults </span>
    </div>
    <input class="searchBar__button" type="submit" value="Search" />
  </form>
</template>

<script>
export default {
  name: "SearchBar",

  props: {
    error: {
      type: Boolean,
      default: false,
    }
  },

  data() {
    return {
      userName: "",
    };
  },

  methods: {
    sudmitUserName() {
      event.preventDefault();
      this.$emit('errorInput', false)
      if (this.user === "") {
        this.$emit('errorInput', true)
        return
      }
      this.$emit("userName", this.userName);
      this.userName = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/styles/_searchBar.scss";
</style>

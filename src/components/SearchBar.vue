<template>
  <form class="searchBar">
    <div class="searchBar__container error">
      <span class="searchBar__icon"></span>
      <input class="searchBar__input" type="text" placeholder="Search GitHub username…" spellcheck="false">
      <span class="searchBar__error">No reults</span>
    </div>
    <input class="searchBar__button" type="submit" value="Search">
  </form>
</template>

<script>
export default {
  name:"SearchBar"
}
</script>

<style lang="scss" scoped>
  @use "@/styles/_searchBar.scss"
</style>
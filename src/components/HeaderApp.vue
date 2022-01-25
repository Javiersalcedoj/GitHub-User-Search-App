<template>
  <header class="header">
      <h1 class="header__title">devfinder</h1>
      <slot></slot>
    </header>
</template>

<script>
export default {
  name: "HeaderApp",
}
</script>

<style lang="scss" scoped>
  @use "@/styles/_headerApp.scss";
</style>
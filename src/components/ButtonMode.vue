<template>
  <button
    class="buttonMode"
    @click="buttonModelClick"
    @mouseover="isHover(true)"
    @mouseout="isHover(false)"
  >
    {{ darkMode ? "LIGHT" : "DARK" }}
    <span class="buttonMode__icon">
      <IconSun v-show="darkMode" :buttonHover="buttonHover" />
      <IconMoon v-show="!darkMode" :buttonHover="buttonHover" />
    </span>
  </button>
</template>

<script>
import IconMoon from "../icon/IconMoon.vue";
import IconSun from "../icon/IconSun.vue";

export default {
  name: "ButtonMode",

  components: { IconMoon, IconSun },

  props: {
    darkMode: {
      type: Boolean,
    },
  },

  data() {
    return {
      buttonHover: false,
    };
  },

  methods: {
    buttonModelClick() {
      this.$emit("changeModel");
    },
    
    isHover(boolean) {
      this.buttonHover = boolean;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/styles/_buttonMode.scss";
</style>

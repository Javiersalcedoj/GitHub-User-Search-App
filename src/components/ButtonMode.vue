<template>
  <button class="buttonMode">
    <slot name="text"></slot>

    <span class="buttonMode__icon">
      <slot name="icon"></slot>
    </span>

  </button>
</template>

<script>
export default {
  name: "ButtonMode",
}
</script>

<style lang="scss" scoped>
  @use '@/styles/_global.scss' as *;

  .buttonMode {
  display: flex;
  align-items: center;
  width: 84px;
  height: 40px;
  font-family: $font-family;
  font-size: $font-regular;
  font-weight: bold;
  letter-spacing: 2.5px;
  color: $font-color-primary;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: $logo-color;
    path {
      fill: $logo-color;
      body.dark &{
        fill: $font-color-primary;;
      }
    }
    body.dark &{
      color: $font-color-primary;
    }
  }

  body.dark &{
    color: $font-color-light;
  }

  &__icon {
    width: 20px;
    height: 20px;
    margin-left: 16px;
    
    path {
      fill: $font-color-primary;
    }
  }
}

</style>
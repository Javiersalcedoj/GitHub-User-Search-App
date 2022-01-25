<template>
  <div class="information">
    <img class="information__img" src="" alt="avatar">
    <div class="information__container">
      <h2 class="information__name">The Octocat</h2>
      <h3 class="information__user">@octocat</h3>
      <p class="information__joined">Joined 25 Jan 2011</p>
    </div>
    
    <p class="information__description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>

    <div class="information__statistic">
      <div class="information__item">
        <h4 class="information__item--title">Repos</h4>
        <p class="information__item--content">8</p>
      </div>
      <div class="information__item">
        <h4 class="information__item--title">Followers</h4>
        <p class="information__item--content">3938</p>
      </div>
      <div class="information__item">
        <h4 class="information__item--title">Following</h4>
        <p class="information__item--content">9</p>
      </div>
    </div>

    <div class="information__links">
      <a class="information__link" href="/">
        <span class="information__icon"><IconLocation /></span>
        San Francisco
      </a>
      <a class="information__link" href="/">
        <span class="information__icon"><IconWebsite /></span>
        https://github.blog
      </a>
      <a class="information__link opasity" href="/" >
        <span class="information__icon"><IconTwitter /></span>
        Not Available
      </a>
      <a class="information__link" href="/">
        <span class="information__icon"><IconCompany /></span>
        @github
      </a>
    </div>

  </div>
</template>

<script>
import IconLocation from '../icon/IconLocation.vue';
import IconWebsite from '../icon/IconWebsite.vue';
import IconTwitter from '../icon/IconTwitter.vue';
import IconCompany from '../icon/IconCompany.vue';

export default {
  name:"CardInformation",
  components: {
    IconLocation,
    IconWebsite,
    IconTwitter,
    IconCompany,
  }
}
</script>

<style lang="scss" scoped>
  @use "@/styles/_cardInformation.scss"

</style>
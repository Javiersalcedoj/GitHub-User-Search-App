<template>
  <div class="information">
    <img class="information__img" :src="data.avatar_url" alt="avatar" />
    <div class="information__container">
      <h2 class="information__name">{{ name }}</h2>
      <h3 class="information__user">{{ `@${data.login}` }}</h3>
      <p class="information__joined">{{ joined }}</p>
    </div>

    <p class="information__description" :class="{ opasity: data.bio === null }">
      {{ data.bio ? data.bio : "This profile has no bio" }}
    </p>

    <div class="information__statistic">
      <div class="information__item">
        <h4 class="information__item--title">Repos</h4>
        <p class="information__item--content">{{ data.public_repos ? data.public_repos : '0'}}</p>
      </div>
      <div class="information__item">
        <h4 class="information__item--title">Followers</h4>
        <p class="information__item--content">{{ data.followers ? data.followers : '0'}}</p>
      </div>
      <div class="information__item">
        <h4 class="information__item--title">Following</h4>
        <p class="information__item--content">{{ data.following ? data.following : '0'}}</p>
      </div>
    </div>

    <div class="information__links">
      <p
        class="information__link location"
        :class="{ opasity: !data.location }"
      >
        <span class="information__icon"><IconLocation /></span>
        {{ data.location ? data.location : error }}
      </p>

      <a
        class="information__link"
        :href="data.blog"
        :class="{ opasity: data.blog === '' || !data.blog }"
      >
        <span class="information__icon"><IconWebsite /></span>
        {{ data.blog === "" || data.blog === undefined ? error : data.blog }}
      </a>
      <a
        class="information__link"
        :href="`https://twitter.com/${data.twitter_username}`"
        :class="{ opasity: !data.twitter_username }"
      >
        <span class="information__icon"><IconTwitter /></span>
        {{ data.twitter_username ? data.twitter_username : error }}
      </a>
      <a
        class="information__link"
        :class="{ opasity: !data.company}"
        :href="`https://github.com/${company}`"
      >
        <span class="information__icon"><IconCompany /></span>
        {{ data.company ? data.company : error }}
      </a>
    </div>
  </div>
</template>

<script>
import IconLocation from "@/icon/IconLocation.vue";
import IconWebsite from "@/icon/IconWebsite.vue";
import IconTwitter from "@/icon/IconTwitter.vue";
import IconCompany from "@/icon/IconCompany.vue";

export default {
  name: "CardInformation",

  props: {
    data: {
      type: Object,
    },
  },

  components: {
    IconLocation,
    IconWebsite,
    IconTwitter,
    IconCompany,
  },

  data() {
    return {
      error: "Not Available",
    };
  },

  computed: {
    name() {
      if (this.data.name) {
        return String(this.data.name).replace(/\b\w/g, (l) => l.toUpperCase());
      } else {
        return String(this.data.login).replace(/\b\w/g, (l) => l.toUpperCase());
      }
    },

    joined() {
      if(!this.data.created_at) {
        return 'Undefined'
      }
      const date = new Date(this.data.created_at);
      const d = date.toString().split(" ");
      return `Joined ${d[2]} ${d[1]} ${d[3]}`;
    },

    company() {
      const array = String(this.data.company).split("");
      if (array[0] === "@") {
        array.splice(0, 1);
      }
      return array.join("");
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/styles/_cardInformation.scss";
</style>

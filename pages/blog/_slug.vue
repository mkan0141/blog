<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <article>
      <nuxt-content :document="article"></nuxt-content>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
})
</script>

<style lang="scss">
$code-block-bg-color: #2f495e;

.nuxt-content-highlight {
  background-color: $code-block-bg-color;

  .filename {
    position: absolute;
    padding: 0.05em 0.5em;
    color: white;
    background-color: lighten($code-block-bg-color, 15%);
    z-index: 1;
  }

  pre {
    padding: 1.8em 1em;
  }
}
</style>

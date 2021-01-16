<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 xl:max-w-6xl xl:px-0">
    <div class="grid grid-cols-4">
      <main class="col-span-3">
        <article class="xl:px-5 xl:py-1">
          <nuxt-content :document="article"></nuxt-content>
        </article>
      </main>
      <aside class="col-span-1">
        <div>
          My Name is neko neko neko neko neko nkeo;
        </div>
      </aside>
    </div>
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

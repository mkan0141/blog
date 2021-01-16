<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 xl:max-w-6xl xl:px-0">
    <div class="grid grid-cols-4">
      <main class="col-span-3">
        <article class="break-words xl:px-5 xl:py-1">
          <nuxt-content :document="article"></nuxt-content>
        </article>
      </main>
      <aside class="col-span-1">
        <div class="toc">
          <ul>
            <li v-for="{ id, text, depth } in article.toc" :key="id">
              <a :href="'#' + id" :class="'toc-h' + depth">{{ text }}</a>
            </li>
          </ul>
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
$bg-gray-100: #f7fafc;
$bg-gray-300: #e2e8f0;
$bg-blue-100: #ebf8ff;
$bg-blue-300: #90cdf4;

.nuxt-content {
  h2, h3 {
    margin-bottom: 1.6rem;
    padding: 0.2rem 0;
    border-bottom: 1px solid $bg-gray-300;
  }

  p {
    margin-bottom: 1rem;

    code {
      margin: 0 0.25rem;
      padding: 0.15rem 0.25rem;
      background-color: $bg-gray-100;
      border: 1px solid $bg-gray-300;
      border-radius: 2px; 
    }
  }

  blockquote {
    margin-bottom: 2rem;
    padding: 1rem;
    background-color: $bg-blue-100;
    border-left: 5px solid $bg-blue-300;
    
    p {
      padding: 0;
    }
  }

  .nuxt-content-highlight {
    margin-bottom: 2rem;
    background-color: $code-block-bg-color;
    border-radius: 5px; 
    
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
}
</style>

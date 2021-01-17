<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 xl:max-w-4xl xl:px-0">
      <main class="">
        <article class="break-words xl:mx-5 xl:my-1">
          <div class="mb-8">
            <h1 class="">{{ article.title }}</h1>
            <ul class="tags"><li class="tag inline px-2 py-1 bg-orange-500 text-white rounded" v-for="tag in article.tags" :key="tag">{{ tag }}</li></ul>
          </div>
          <nuxt-content :document="article"></nuxt-content>
        </article>
      </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Article {
  title: string,
  img: String,
  path: String,
  createdAt: String,
}

export default Vue.extend({
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    console.log(article)
    return { article }
  },
  data() {
    return {
      recent_articles: [] as any,
      categories: [] as any,
    }
  },
  async created() {
    this.recent_articles = await this.$content('articles')
      .only(['title', 'img', 'path', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .limit(5)
      .fetch();
    this.categories = await this.$content('articles')
      .only(['category'])
      .fetch()
    console.log(this.categories)
    console.log(this.recent_articles)
  }
})
</script>

<style lang="scss">
$code-block-bg-color: #2f495e;
$bg-gray-100: #f7fafc;
$bg-gray-300: #e2e8f0;
$bg-blue-100: #ebf8ff;
$bg-blue-300: #90cdf4;

.tags {
  .tag:nth-child(n+2) {
    margin-left: 0.5rem;
  }
}

.nuxt-content {
  background-color: white;
  border-radius: 10px;

  h1 {
    margin-bottom: 2rem;
  }

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
      margin-bottom: 0;
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

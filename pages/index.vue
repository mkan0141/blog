<template>
  <div class="max-w-4xl mx-auto">
    <li class="py-4 border-b-2" v-for="article in recent_articles" :key="article.title">
      <div class="text-sm">{{ article.published_at }}</div>
      <div class="mt-1 text-2xl font-bold leading-4"> {{ article.title }} </div>
      <div class="mt-4">
        <div class="flex">
          <button class="bg-orange-500 text-sm text-white px-2 rounded tag" v-for="tag in article.tags" :key="tag">{{ tag }}</button>
        </div>
      </div>
    </li>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'


export default Vue.extend({
  async asyncData ({ $content }) {
    const recent_articles = await $content('articles')
      .only(['title', 'tags', 'img', 'path', 'publishedAt'])
      .sortBy('publishedAt', 'desc')
      .limit(5)
      .fetch()
      .then((articles) => {
        return articles.map((article: IContentDocument) => {
          return {
            title: article.title,
            tags: article.tags,
            url: article.path,
            img: article.img,
            published_at: article.publishedAt.split('T')[0],
          }
        })
      })
      .catch((err) => console.log(err))
    console.log(recent_articles)
    return { recent_articles }
  }
})
</script>

<style>
li {
  list-style: none;
}

.tag:nth-child(n + 2) {
  margin-left: 16px;
}
</style>

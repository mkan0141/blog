<template>
  <article>
    <nuxt-content :document='article'></nuxt-content>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'


export default Vue.extend({
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  }
})
</script>
<template>
  <footer class="bg-orange-500 mt-40">
    <div class="flex items-center justify-end h-16 mx-auto max-w-4xl">
      <div>
      <a href="https://twitter.com/mkan_0141"><fa class="icon" :icon="faTwitter" /></a>
      <a href="https://github.com/mkan0141"><fa class="icon ml-4" :icon="faGithub" /></a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

export default Vue.extend({
  computed: {
    faTwitter () {
      return faTwitter
    },
    faGithub () {
      return faGithub
    }
  }
})
</script>

<style lang="scss" scoped>
.icon {
  color: #fff;
  font-size: 1.25rem;
}
</style>
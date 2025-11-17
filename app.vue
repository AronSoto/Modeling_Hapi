<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'es',
  },
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
}

.container {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 15px;
}
</style>

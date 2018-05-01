<template>
    <router-link :to="{name: 'details', params: {mappingId: mapping.id}}" v-if="mapping.request">
        {{ mapping.request.urlPattern }}<br>{{ mapping.request.method }}
    </router-link>
</template>

<script>
  export default {
    name: 'mapping',
    props: ['mapping']
  }
</script>

<style scoped>
    a {
        padding: 0.5rem 1rem;
        display: block;
    }
</style>
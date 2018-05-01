<template>
    <div>DETAILS</div>
</template>

<script>
  export default {
    name: 'mapping-details',
    data () {
      return {
        mapping: {}
      }
    },
    beforeRouteEnter (to, from, next) {
      console.log(to)
    },
    beforeRouteUpdate (to, from, next) {

    },
      methods: {

      }
  }
</script>

<style scoped>

</style>
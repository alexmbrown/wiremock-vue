<template>
    <div class="flex-col center justify-center">
        <icon name="server"></icon><br>
        <span>Select a server or <strong class="underline pointer" v-b-modal.addServerModal>add</strong> a new one</span>
    </div>
</template>

<script>
  import WvAddServerModal from './AddServerModal'

  export default {
    components: {
      WvAddServerModal
    },
    name: 'wv-server-select'
  }
</script>

<style scoped>

</style>
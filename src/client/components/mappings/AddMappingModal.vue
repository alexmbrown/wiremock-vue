<template>
    <div>
        <b-btn variant="primary" v-b-modal.addMappingModal>Add Mapping</b-btn>
        <b-modal title="Bootstrap-Vue" id="addMappingModal">
            <p class="my-4">Mapping Modal</p>
        </b-modal>
    </div>
</template>

<script>
  export default {
    name: 'add-mapping-modal'
  }
</script>

<style scoped>

</style>
<template>
    <div>
        <b-row class="full-width space-between">
            <h4>Headers</h4>
            <div>
                <b-btn variant="primary" @click="addHeader">Add</b-btn>
                <b-btn v-b-toggle.headersCollapse variant="primary">Toggle</b-btn>
            </div>
        </b-row>
        <b-collapse id="headersCollapse" ref="headersCollapse">
            <wv-key-value-matcher v-for="header in headers" v-bind:key="key" v-bind:value="value"></wv-key-value-matcher>
        </b-collapse>
    </div>
</template>

<script>
  export default {
    name: 'key-value-matcher-group'
  }
</script>

<style scoped>

</style>
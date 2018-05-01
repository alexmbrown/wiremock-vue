<template>
    <div id="details" v-if="mapping">
        {{ mapping }}
        <wv-request v-bind:request="mapping.request"></wv-request>
        <wv-response v-bind:response="mapping.response"></wv-response>
    </div>
</template>

<script>
  import axios from 'axios';
  import WvResponse from './Response';
  import WvRequest from './Request';

  function getMapping(serverId, mappingId) {
    return axios.get(`/api/servers/${serverId}/mappings/${mappingId}`)
  }

  export default {
    components: {
      WvResponse,
      WvRequest
    },
    data () {
      return {
        error: null,
        mapping: null
      }
    },
    beforeRouteEnter (to, from, next) {
      getMapping(to.params.serverId, to.params.mappingId)
        .then(res => next(vm => vm.onResolve(res.data)))
        .catch(err => next(vm => vm.onError(err.response)))
    },
    beforeRouteUpdate (to, from, next) {
      getMapping(to.params.serverId, to.params.mappingId)
        .then(res => {
          this.onResolve(res.data)
          next()
        })
        .catch(err => {
          this.onError(err.response)
          next()
        })
    },
    methods: {
      onResolve (mapping) {
        this.mapping = mapping
      },
      onError (err) {
        this.error = err
      }
    }
  }
</script>

<style scoped>
    div#details {
        padding: 1rem;
        height: 100%;
        overflow-y: auto;
    }
</style>
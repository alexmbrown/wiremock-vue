<template>
    <section class="flex" v-if="mappings">
        <nav class="full-height">
            <add-mapping-modal></add-mapping-modal>
            <ul class="list-unstyled" v-if="mappings.length > 0">
                <li v-for="(mapping, index) in mappings" :key="index">
                    <mapping v-bind:mapping="mapping"></mapping>
                </li>
            </ul>
            <p v-else>No Mappings</p>
        </nav>
        <router-view class="flex-1"></router-view>
    </section>
    <p v-else-if="error">
        {{ error }}
    </p>
    <p v-else>
        Server not connected
    </p>
</template>

<script>
  import axios from 'axios'
  import Mapping from './Mapping'
  import AddMappingModal from './AddMappingModal'

  function getMappings(serverId) {
    return axios.get(`/api/servers/${serverId}/mappings`)
  }

  export default {
    components: {
      AddMappingModal,
      Mapping
    },
    data () {
      return {
        error: null,
        mappings: null
      }
    },
    beforeRouteEnter (to, from, next) {
      getMappings(to.params.serverId)
        .then(res => next(vm => vm.onResolve(res.data.mappings)))
        .catch(err => next(vm => vm.onError(err.response)))
    },
    beforeRouteUpdate (to, from, next) {
        getMappings(to.params.serverId)
          .then(res => {
            this.onResolve(res.data.mappings)
            next()
          })
          .catch(err => {
            this.onError(err.response)
            next()
          })
    },
    methods: {
      onResolve (mappings) {
        this.mappings = mappings
      },
      onError (err) {
        if (err.status !== 404) {
            this.error = err
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    @import '../../../assets/styles/color-palette.scss';

    section {
        background: color-palette('foreground');
    }

    nav {
        background: color-palette('background');
        height: 100%;
        width: 18rem;
        min-width: 18rem;
        overflow-y: auto;
    }
</style>
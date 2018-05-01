<template>
    <section class="flex">
        <nav class="full-height">
            <add-mapping-modal></add-mapping-modal>
            <ul class="list-unstyled">
                <li v-for="(mapping, index) in mappings" :key="index">
                    <mapping v-bind:mapping="mapping"></mapping>
                </li>
            </ul>
        </nav>
        <router-view class="flex-1"></router-view>
    </section>
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
      'mapping': Mapping
    },
    data () {
      return {
        mappings: []
      }
    },
    beforeRouteEnter (to, from, next) {
      getMappings(to.params.serverId)
        .then(res => next(vm => vm.onResolve(res.data.mappings)))
        .catch(err => next(vm => vm.onError(err)))
    },
    beforeRouteUpdate (to, from, next) {
        getMappings(to.params.serverId)
          .then(res => {
            this.onResolve(res.data)
            next()
          })
          .catch(err => {
            this.onError(err)
            next()
          })
    },
    methods: {
      onResolve (mappings) {
        this.mappings = null
        this.mappings = mappings
      },
      onError (err) {
        console.log(err)
      }
    }
  }
</script>

<style scoped lang="scss">
    @import '../../../assets/styles/color-palette.scss';

    section {
        background: color-palette('background');
    }

    nav {
        background: color-palette('foreground');
    }
</style>
<template>
    <main class="flex full-height">
        <wv-add-server-modal v-on:add-server="onAddServer"></wv-add-server-modal>
        <nav>
            <nav class="float-left full-height">
                <ul class="list-unstyled">
                    <li v-for="(server, index) in servers" :key="index">
                        <server v-bind:server="server"></server>
                    </li>
                    <li>
                        <span v-b-modal.addServerModal>Add Server</span>
                    </li>
                </ul>
            </nav>
        </nav>
        <router-view class="flex-1"></router-view>
    </main>
</template>

<script>
  import axios from 'axios'
  import Server from './Server'
  import WvAddServerModal from './AddServerModal'

  export default {
    beforeRouteEnter: async (to, from, next) => {
      try {
        let response = await axios.get('/api/servers')
        next(vm => vm.onResolve(response.data))
      } catch (err) {
        next(vm => vm.onError(err))
      }
    },
    components: {
      WvAddServerModal,
      Server
    },
    data () {
      return {
        servers: []
      }
    },
    methods: {
      onAddServer (server) {
        axios.post('/api/servers', server).then(response => {
            this.servers.push(response.data)
        })
      },
      onResolve (servers) {
        this.servers = servers
      },
      onError (err) {
        console.log(err)
      }
    }
  }
</script>

<style scoped lang="scss">
    @import '../../../assets/styles/color-palette.scss';

    main {
        padding-top: 3.5rem;
    }

    nav {
        width: 15rem;
        background: color-palette('primary');
        padding-top: 0.5rem;
    }

    nav > ul > li {
        position: relative;
        padding: 0.25rem 1rem;
    }

    span {
        display: block;
        border: 0.1rem dashed white;
        color: white;
        padding: 0.5rem 1rem;
        text-align: center;
        border-radius: 0.2rem;
        cursor: pointer;
    }
</style>
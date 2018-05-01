<template>
    <div>
        <wv-header></wv-header>
        <router-view class="flex-1"></router-view>
    </div>
</template>

<script>
  import '../assets/styles/main.scss'
  import WvHeader from './components/Header'

  export default {
    components: {
      WvHeader
    },
    name: 'wv-app'
  }
</script>

<style scoped lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }


    div {
        height: 100%;
    }
</style>

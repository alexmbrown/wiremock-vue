<template>
    <b-navbar fixed="top" type="light" variant="light">
        <b-navbar-brand href="/">
            <img class="wiremock" src="../../assets/img/wiremock.png"/>
            <icon name="plus"></icon>
            <img class="wiremock" src="../../assets/img/vue.png"/>
        </b-navbar-brand>
    </b-navbar>
</template>

<script>
  export default {
    name: 'wv-header'
  }
</script>

<style scoped>
    a.navbar-brand {
        display: flex;
        align-items: center;
    }

    img {
        height: 2rem;
    }

    svg {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        color: gray;
    }
</style>
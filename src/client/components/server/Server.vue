<template>
    <router-link :to="{name: 'mappings', params: {serverId: server.id}}">
        <span class="muted">
            <strong>{{server.name}}</strong><br>
            <small class="muted">{{server.address}}</small>
        </span>
    </router-link>
</template>

<script>
  export default {
    name: 'server',
    props: ['server']
  }
</script>

<style scoped lang="scss">
    @import '../../../assets/styles/color-palette.scss';

    a {
        display: block;
        width: 100%;
        color: color-palette('text-primary');
        text-decoration: none;
        padding: 0.5rem;
        border-radius: 0.5rem;
    }

    a.router-link-active::after {
        position: absolute;
        right: 0;
        top: calc(50% - 1rem);
        content: '';
        display: inline-block;
        border-top: 1rem solid transparent;
        border-right: 1rem solid white;
        border-bottom: 1rem solid transparent;
    }

    a:hover {
        background: color-palette('primary-dark');
    }

    .muted {
        display: block;
        opacity: 0.7;
        transition: all 0.5s;

        &:hover {
            opacity: 1;
        }
    }

</style>
<template>
    <b-container id="app">
        <b-nav id="nav">
            <router-link to="/" exact tag="li" class="nav-item" active-class="active"><a class="nav-link">{{ $t("nav.home") }}</a></router-link>
            <router-link to="/calendar" tag="li" class="nav-item" active-class="active"><a class="nav-link">{{ $t("nav.calendar") }}</a></router-link>
            <router-link to="/about" tag="li" class="nav-item" active-class="active"><a class="nav-link">{{ $t("nav.about") }}</a></router-link>
            <b-nav-item>
                <TheL10nChanger/>
            </b-nav-item>
        </b-nav>
        <router-view/>
    </b-container>
</template>

<script>
    import TheL10nChanger from './components/TheL10nChanger'

    export default {
        name: 'home',
        components: {
            TheL10nChanger
        }
    }

</script>

<style lang="scss">
    li.active a {
        color: red;
    }
</style>

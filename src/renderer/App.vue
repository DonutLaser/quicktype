<template>
    <div id="app">
        <typing-page v-if="page === 'typing'" :text="currentText" @back-to-menu="onTypingAbort"></typing-page>
        <home-page v-if="page === 'home'" @onClickNew="startTyping"></home-page>
        <stats-page v-if="page === 'stats'" :data="typingStats" @back-to-menu="onTypingAbort"></stats-page>
    </div>
</template>

<script>
    import TypingPage from './components/TypingPage.vue';
    import HomePage from './components/HomePage.vue';
    import StatsPage from './components/StatsPage.vue';

    import randomText from './../mixins/randomText';

    // Use font-awesome icons in the project
    import Vue from 'vue';
    import "font-awesome/css/font-awesome.min.css";

    Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);

    export default {
        name: 'quicktype',
        components: {
            TypingPage,
            HomePage,
            StatsPage,
        },
        mixins: [randomText],
        data: function () {
            return {
                page: 'home',
                typingStats: null,
            };
        },
        methods: {
            startTyping: function () {
                this.getRandomText();
                this.page = 'typing';
            },
            onTypingAbort: function (stats) {
                this.page = stats.showStatus ? 'stats' : 'home';

                if (stats.data) { this.typingStats = stats.data; }
            },
        },
    };
</script>

<style scoped>
#app {
    background-color: #141414;
    width: inherit;
    height: inherit;
}
</style>

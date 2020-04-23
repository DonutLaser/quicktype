<template>
    <div id="app">
        <toolbar></toolbar>
        <main-area></main-area>
<!--         <typing-page v-if="page === 'typing'" :text="currentText" @back-to-menu="onTypingAbort"></typing-page>
        <home-page v-if="page === 'home'" @onClickNew="startTyping"></home-page>
        <stats-page v-if="page === 'stats'" :data="typingStats" @back-to-menu="onTypingAbort"></stats-page> -->
    </div>
</template>

<script>
    import Toolbar from './components/Toolbar';
    import MainArea from './components/MainArea';
    // import TypingPage from './components/TypingPage';
    // import HomePage from './components/HomePage';
    // import StatsPage from './components/StatsPage';

    // import randomText from './../mixins/randomText';

    // // Use font-awesome icons in the project
    // import Vue from 'vue';
    // import "font-awesome/css/font-awesome.min.css";

    // Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);

    export default {
        name: 'quicktype',
        components: {
            Toolbar,
            MainArea,
        },
        // components: {
        //     TypingPage,
        //     HomePage,
        //     StatsPage,
        // },
        // mixins: [randomText],
        // data: function () {
        //     return {
        //         page: 'home',
        //         typingStats: null,
        //     };
        // },
        // methods: {
        //     startTyping: function () {
        //         this.getRandomText();
        //         this.page = 'typing';
        //     },
        //     onTypingAbort: function (stats) {
        //         this.currentText = '';
        //         this.page = stats.showStatus ? 'stats' : 'home';

        //         if (stats.data) { this.typingStats = stats.data; }
        //     },
        // },
    };
</script>

<style scoped>
#app {
    background-color: #333333;
    width: inherit;
    height: inherit;
    overflow: hidden; /* To prevent child margin pushing background down */
}
</style>

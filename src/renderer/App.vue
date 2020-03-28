<template>
    <div id="app">
        <typing-page v-if="page === 'typing'" :text="currentText"></typing-page>
        <home-page v-if="page === 'home'" @onClickNew="startTyping"></home-page>
    </div>
</template>

<script>
    import TypingPage from './components/TypingPage.vue';
    import HomePage from './components/HomePage.vue';

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
        },
        mixins: [randomText],
        data: function () {
            return {
                page: 'home',
            };
        },
        methods: {
            startTyping: function () {
                this.getRandomText();
                this.page = 'typing';
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

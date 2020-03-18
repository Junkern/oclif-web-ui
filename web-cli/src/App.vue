<template>
    <div id="app">
        <!-- <b-button variant="danger" size="lg" class="float-right" @click="exit">Exit</b-button> -->
        <h1>Web CLI</h1>
        <CLIContainer />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CLIContainer from './components/CLIContainer.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default Vue.extend({
    name: 'App',
    components: {
        CLIContainer
    },
    methods: {
        exit: function() {
            window.close()
        }
    }
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1 {
    padding-bottom: 2rem;
}
</style>

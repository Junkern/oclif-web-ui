<template>
    <div id="cli-container" class="container">
        <div class="row">
            <div class="col-6">
                <ul v-for="item in commands" v-bind:key="item.id">
                    <li>
                        <CLICommand v-bind:command="item" />
                    </li>
                </ul>
            </div>
             <div class="col-6">

             </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ConfigService } from '../ConfigService'
import CLICommand from './CLICommand.vue'

export default Vue.extend({
    name: 'CLIContainer',
    components: {
        CLICommand
    },
    data: function() {
        return {
            config: {},
            commands: [],
            response: ''
        }
    },
    created() {
        this.loadConfig()
    },
    methods: {
        loadConfig: async function() {
            this.config = await ConfigService.getConfig()
            this.commands = await ConfigService.getCommands()
        },
        runCommand: async function(commandId: string) {
            this.response = await ConfigService.runCommand(commandId)
        }
    }
})
</script>

<style scoped>
#cli-container {
    text-align: left;
}

ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 0 2px rgba(0,0,0,.3);
    width: 450px;
}
</style>

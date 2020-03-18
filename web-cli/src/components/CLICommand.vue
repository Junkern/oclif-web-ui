<template>
    <div>
        Action: {{command.id}} <br/>
        Description: {{command.description}} <br/>
        <b-button variant="info" @click="runCommand(command.id)">Run command</b-button> <br/>
        Response: {{response}}
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ConfigService } from '../ConfigService'

export default Vue.extend({
    name: 'CLICommand',
    props: {
        command: {}
    },
    data: function() {
        return {
            response: ''
        }
    },
    methods: {
        runCommand: async function(commandId: string) {
            this.response = await ConfigService.runCommand(commandId)
        }
    }
})
</script>

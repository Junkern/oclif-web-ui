import Vue from 'vue'

class ConfigService {
    static async getConfig() {
        // const config = await Config.load('/home/martin/Documents/Development/mynewcli/bin/run')
        const response = await Vue.axios.get('/data/config')
        return response.data
    }

    static async getCommands() {
        // const config = await Config.load('/home/martin/Documents/Development/mynewcli/bin/run')
        const response = await Vue.axios.get('/data/commands')
        return response.data
    }

    static async runCommand(commandId: string) {
        const response = await Vue.axios.post('/data/run', { commandId })
        return response.data
    }
}

export { ConfigService }

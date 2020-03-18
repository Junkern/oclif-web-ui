import fastify from 'fastify'
import fStatic from 'fastify-static'
import * as path from 'path'
import * as Config from '@oclif/config'
import Command from '../command'

class Server {
    private server: fastify.FastifyInstance

    constructor(private cliConfig: Config.IConfig, private cliCommands: Config.Command.Plugin[]) {
        this.server = fastify({logger: false})
        this.setupFastify()
    }
    
    private setupFastify() {
        this.server.register(fStatic, {
            root: path.join(__dirname, '../web-cli/dist')
        })
        this.server.setNotFoundHandler((request, reply) => {
            if (request.raw.method !== 'GET') {
                return reply.status(404)
            } else if (!request.headers || typeof request.headers.accept !== 'string') {
                return reply.status(404)
            } else if (request.headers.accept.indexOf('application/json') === 0) {
                return reply.status(404)
            } else if (!this.acceptsHtml(request.headers.accept)) {
                return reply.status(404)
            }
            reply.sendFile('index.html')
        })
        this.server.get('/data/config', async (request, reply) => {
            return this.cliConfig
        })
        this.server.get('/data/commands', async (request, reply) => {
            return this.cliCommands
        })
        this.server.get('/end', async (request, reply) => {
            process.exit(1)
        })
        this.server.post('/data/run', async (request, reply) => {
            const {commandId} = request.body
            const c = this.cliConfig.findCommand(commandId)
            if (!c) {
                // await this.runHook('command_not_found', {id})
                // throw new CLIError(`command ${id} not found`)
                throw new Error('command not found')
              }
            const command = c.load()
            // await this.runHook('prerun', {Command: command, argv})
            await command.run()
            return Command.getAndClearLogs()
        })
    }

    private acceptsHtml(header: string) {
        const htmlAcceptHeaders = ['text/html', '*/*'];
        for (let i = 0; i < htmlAcceptHeaders.length; i += 1) {
            if (header.indexOf(htmlAcceptHeaders[i]) !== -1) {
                return true;
            }
        }
        return false;
    }

    public async startServer() {
        try {
            await this.server.listen(3000)
        } catch (err) {
            this.server.log.error(err)
            process.exit(1)
        }
    }
}

export {Server}

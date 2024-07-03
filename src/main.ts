import { Client, GatewayIntentBits } from 'discord.js'
import { env } from './env'

const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent],
})

client.on('ready', () => {
	console.log(`Logged in as ${client.user?.tag}!`)
})

client.on('messageCreate', async (msg) => {
	console.log(msg)
	if (msg.content === 'ping') {
		await msg.channel.send('pong')
	}
})

client.login(env.DISCORD_TOKEN)

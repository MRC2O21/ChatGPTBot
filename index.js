// index.js

const Discord = require('discord.js')
const client = new Discord.Client()
const commands = new Map()

async function registerCommands() {
  const commandModule = await import('./commands/repeat')
  commands.set(commandModule.data.name, commandModule)
}

client.on('message', message => {
  if (!message.content.startsWith('/')) return

  const commandName = message.content.split()[0]
  const command = commands.get(commandName)
  if (!command) return

  command.execute(message)
})

registerCommands().then(() => {
  client.login('MTA1NzQ0NzUxMjc1NzI1MjIxNg.Gb7G9y.1gY5hk8KkFzXXlmqwGPLZGdaH8tQ26KCzUtVzY')
})


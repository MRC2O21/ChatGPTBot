// commands/repeat.js

const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('repeat')
    .setDescription('Repeats the user\'s message'),
  async execute(interaction) {
    const message = interaction.message.content.split().slice(1).join(' ')
    await interaction.reply(message)
  },
}

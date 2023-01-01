const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('repeat')
    .setDescription('Repeats the user\'s message')
    .addStringOption(option =>
          option.setName("message")
         .setDescription("The message for me to repeat.")
         .setRequired(true)),

  async execute(interaction) {
    const message = interaction.options.getString('message');
    await interaction.reply(message);
  },
}

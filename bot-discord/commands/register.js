const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('register')
        .setDescription('Register riot account')
        .addStringOption(option =>
            option.setName('summoner')
                .setDescription('Summoner name')
                .setRequired(true)
        ),
    async execute(interaction) {
        const reason = interaction.options.getString('summoner') ?? 'No reason provided';

        await interaction.reply(`${reason}`);
    },
};
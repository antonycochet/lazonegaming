const {SlashCommandBuilder} = require("discord.js");
const api = require("../services/api");

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

        const summoner = await api('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                summoner: reason
            })
        });

        await interaction.reply(`Request sent to register ${summoner}`);
    },
};
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
        const username = interaction.user.username;
        const summonerInput = interaction.options.getString('summoner') ?? null;

        if (!summonerInput) {
            await interaction.reply({
                content: 'Summoner name is required',
                ephemeral: true
            });
            return;
        }

        try {
            await api('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    summoner: summonerInput,
                    username
                })
            });
        } catch (e) {
            await interaction.reply({
                content: e.message,
                ephemeral: true // Only the user who invoked the command will see the reply
            });
            return;
        }

        await interaction.reply({
            content: "Registered successfully"
        });
    },
};

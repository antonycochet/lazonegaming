const { Client, GatewayIntentBits } = require('discord.js');

const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ],
});



module.exports = {
    bot
}
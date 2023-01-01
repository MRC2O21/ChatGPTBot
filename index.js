const Discord = require('discord.js');
const { token } = require('./config.json');

const Client = Discord.Client;
const Events = Discord.Events;
const GatewayIntentBits = Discord.GatewayIntentBits;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once(Events.CLIENT_READY, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);

require('dotenv').config();
import { Client, GatewayIntentBits } from 'discord.js'
const client = new Client({ intents: [GatewayIntentBits.Guilds]});

client.once('ready', c => {
    console.log(`Discord Client Ready`)
})

client.login(process.env.TOKEN);
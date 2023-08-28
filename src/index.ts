import dotenv from 'dotenv';
dotenv.config();
import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', (c) => {
  console.log(`Discord Client Ready. ${c.application.name}`);
});

client.login(process.env.DISCORD_TOKEN);

export default client;
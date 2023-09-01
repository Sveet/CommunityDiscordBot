import dotenv from 'dotenv';
dotenv.config();
import { Client, GatewayIntentBits, Message } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', (c) => {
  console.log(`Discord Client Ready. ${c.application.name}`);
});
const token = process.env.DISCORD_TOKEN;
console.log(`token length: ${token.length}`);
client.login(token);

client.on('message', (message: Message) => {
  if (message.content.match(/\bba+rb\b/gi)) {
    message.channel.send('BARB')
  }
});

export default client;

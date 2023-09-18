import dotenv from 'dotenv';
dotenv.config();
import messageEvents from './messages';
import { ChannelType, Client, Events, GatewayIntentBits, Message } from 'discord.js';
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', (c) => {
  console.log(`Discord Client Ready. ${c.user.tag}`);
});

client.on(Events.MessageCreate, async (message: Message) => {
  if (message.author.bot || message.channel.isDMBased()) return;

  console.log(`[${new Date().toISOString()}] (${message.channel?.name}) ${message.author.displayName}: ${message.content}`)

  for (const me of messageEvents) {
    if (me.match(message)) {
      try {
        await me.action(message);
      } catch (err) {
        console.error('Action threw an error: ', err);
      }
    }
  }
});

const token = process.env.DISCORD_TOKEN;
client.login(token);

export default client;

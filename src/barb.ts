import { Message } from 'discord.js';
import client from './index';
client.on('message', (message: Message) => {
  console.log(`message received in #${message.channelId}: ${message.author.displayName} "${message.content}"`);
  if (message.content.match(/\bba+rb\b/gi)) {
    message.channel.send('BARB')
  }
});

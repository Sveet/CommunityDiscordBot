import { Message } from 'discord.js';
import client from './index';
client.on('message', (message: Message) => {
  if (message.content.match(/\bba+rb\b/gi)) {
    message.channel.send('BARB')
  }
});

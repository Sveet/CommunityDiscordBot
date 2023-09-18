import { Message } from 'discord.js';

const messageEvents: MessageEvent[] = [
  {
    match: (message) => {
      return !!message.content.match(/\bba+rb\b/gi);
    },
    action: async (message) => {
      await message.channel.send('BARB');
    },
  },
  {
    match: (message) => {
      return message.author.id == '389486278640664587'  // @nicodegallo
        && ((Math.random() * 118) % 69 == 23);  // once in a blue moon
    },
    action: async (message) => {
      await message.react('596373668028743693');  // :118:
    },
  },
];

export type MessageEvent = {
  match: (message: Message) => boolean;
  action: (message: Message) => Promise<void>;
};
export default messageEvents;

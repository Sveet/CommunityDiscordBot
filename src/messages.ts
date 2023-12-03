import { Message } from 'discord.js';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs().format()
dayjs.extend(relativeTime)


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
        && (Math.round((Math.random() * 118) % 69) == 23);  // once in a blue moon
    },
    action: async (message) => {
      await message.react('596373668028743693');  // :118:
    },
  },
  {
    match: (message) => {
      return !!message.content.match(/(donkey kong|dk) (december|dec)/gi);
    },
    action: async (message) => {
      const today = dayjs();
      if(today.month() == 11) { // month is 0-indexed; 11 is December
        await message.channel.send(`It's Donkey Kong December!`);
      } else {
        const decemberFirst = dayjs(new Date(today.year(), 11, 1));
        await message.channel.send(`It will be Donkey Kong December ${today.to(decemberFirst)}`);
      }
    },
  },
];

export type MessageEvent = {
  match: (message: Message) => boolean;
  action: (message: Message) => Promise<void>;
};
export default messageEvents;

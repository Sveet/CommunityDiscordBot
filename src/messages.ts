import { Message } from "discord.js";

const messageEvents: MessageEvent[] = [
  {
    match: (message) => {
      return !!message.content.match(/\bba+rb\b/gi);
    },
    action: async (message) => {
      await message.channel.send('BARB')
    }
  }
]

export type MessageEvent = {
  match: (message: Message)=>boolean;
  action: (message: Message)=>Promise<void>;
}
export default messageEvents;
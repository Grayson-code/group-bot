import { ApplyOptions } from '@sapphire/decorators';
import { Listener, ListenerOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<ListenerOptions>({})
export class UserEvent extends Listener {
  public run(message: Message) {
    if (message.content.includes("good bot")) {
      message.reply("good human")
    }
    
  }
}

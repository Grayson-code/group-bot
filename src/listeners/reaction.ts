import { ApplyOptions } from '@sapphire/decorators';
import { Listener, ListenerOptions } from '@sapphire/framework';
import type { MessageReaction, User } from 'discord.js';

@ApplyOptions<ListenerOptions>({
  name: "messageReactionAdd"
})
export class UserEvent extends Listener {
  public async run(message: MessageReaction, user: User) {
    if (message.message.channel.id !== "998188386525380609") return;
    if (user.id === "997868159119917148") return;
    await message.message.delete()
  }
}

import { ApplyOptions } from '@sapphire/decorators';
import { Listener, ListenerOptions } from '@sapphire/framework';
import type { MessageReaction, User } from 'discord.js';

@ApplyOptions<ListenerOptions>({
  name: "messageReactionAdd"
})
export class UserEvent extends Listener {
  public async run(message: MessageReaction, user: User) {
    if (user.id === "997868159119917148") return;
    if (message.partial) {
      const msg = await message.fetch();
      if (msg.message.channel.id !== "998943746206990376") return;
      await message.message.delete()
    } else {
      if (message.message.channel.id !== "998943746206990376") return;
      await message.message.delete()
    }

  }
}

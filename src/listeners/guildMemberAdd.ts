import { ApplyOptions } from '@sapphire/decorators';
import { Listener, ListenerOptions } from '@sapphire/framework';
import type { GuildMember, Role } from 'discord.js';

@ApplyOptions<ListenerOptions>({})
export class UserEvent extends Listener {
  public async run(member: GuildMember) {
    const role = await member.guild.roles.fetch("998941548827922462") as Role
    await member.roles.add(role)
  }
}

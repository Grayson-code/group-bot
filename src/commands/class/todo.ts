import { ApplyOptions } from '@sapphire/decorators';
import type { Args } from '@sapphire/framework';
import { SubCommandPluginCommand, SubCommandPluginCommandOptions } from '@sapphire/plugin-subcommands';
import type { Message, TextChannel } from 'discord.js';

@ApplyOptions<SubCommandPluginCommandOptions>({
	description: 'A basic command'
})
export class UserCommand extends SubCommandPluginCommand {
	public async messageRun(message: Message, args: Args) {
		const channels = await message.client.channels.fetch("998943746206990376") as TextChannel
		const msg = await channels.send(await args.rest("string"))
		msg.react("✅")
	}
}

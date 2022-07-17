import { ApplyOptions } from '@sapphire/decorators';
import type { Args } from '@sapphire/framework';
import { SubCommandPluginCommand, SubCommandPluginCommandOptions } from '@sapphire/plugin-subcommands';
import type { Message, TextChannel } from 'discord.js';

@ApplyOptions<SubCommandPluginCommandOptions>({
	description: 'A basic command'
})
export class UserCommand extends SubCommandPluginCommand {
	public async messageRun(message: Message, args: Args) {
		const channels = await message.client.channels.fetch("998188386525380609") as TextChannel
		const msg = await channels.send(await args.pick("string"))
		msg.react("✔")
	}
}

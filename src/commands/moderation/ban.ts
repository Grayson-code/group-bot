import { ApplyOptions } from '@sapphire/decorators';
import { SubCommandPluginCommand, SubCommandPluginCommandOptions } from '@sapphire/plugin-subcommands';
import type { Message } from 'discord.js';

@ApplyOptions<SubCommandPluginCommandOptions>({
	description: 'A basic command'
})
export class UserCommand extends SubCommandPluginCommand {
	public async messageRun(message: Message) {
		const user = message.mentions.members!.first();
		if (!user) {
			message.reply("Please mention a user");
			return
		}
		await user?.send("You have been kicked from School").catch()
		await user?.kick();
		await message.channel.send(`${user?.user.tag} has been kicked`);
	}
}

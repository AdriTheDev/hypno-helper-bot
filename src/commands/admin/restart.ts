import { CommandData, SlashCommandProps, CommandOptions } from 'commandkit';
import { EmbedBuilder } from 'discord.js';

export const data: CommandData = {
  name: 'restart',
  description: 'Restart the bot',
};

export async function run({ interaction, client, handler }: SlashCommandProps) {
  await interaction.reply({ content: 'Restarting...', ephemeral: true });

  await client.destroy();
  process.exit(0);
}

export const options: CommandOptions = {
  cooldown: 10,
  userPermissions: 'Administrator',
};

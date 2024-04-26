import type { CommandData, SlashCommandProps, CommandOptions } from 'commandkit';
import { EmbedBuilder } from 'discord.js';

export const data: CommandData = {
  name: 'ping',
  description: 'Gets the ping for the bot',
  dm_permission: false,
};

export async function run({ interaction, client, handler }: SlashCommandProps) {
  let msg = await interaction.deferReply({ fetchReply: true });

  let pingEmbed = new EmbedBuilder()
    .setTitle('Pong!')
    .addFields(
      { name: 'Bot Latency', value: `\`${msg.createdTimestamp - interaction.createdTimestamp}ms\``, inline: true },
      { name: 'WS Latency', value: `\`${client.ws.ping}ms\``, inline: true }
    )
    .setColor(0x9b6dff)
    .setTimestamp();

  interaction.editReply({ embeds: [pingEmbed] });
}

// export const options: CommandOptions = {
// 	deleted: true,
// };

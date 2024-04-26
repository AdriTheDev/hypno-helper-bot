import type { CommandData, SlashCommandProps, CommandOptions } from 'commandkit';
import { ApplicationCommandOptionType, EmbedBuilder, GuildMember } from 'discord.js';
import ms from 'ms';

export const data: CommandData = {
  name: 'unmute',
  description: 'Unmutes a member in the server!',
  dm_permission: false,
  options: [
    {
      name: 'member',
      description: 'The member to unmute',
      type: ApplicationCommandOptionType.User,
      required: true,
    },
  ],
};

export async function run({ interaction, client, handler }: SlashCommandProps) {
  await interaction.deferReply({ ephemeral: true });

  let target = interaction.options.getUser('member') || interaction.user;
  let member = interaction.guild?.members.cache.get(target.id);
  let intMember = interaction.guild?.members.cache.get(interaction.user.id) as GuildMember;

  if (!member) {
    return interaction.editReply('That user is not in this server!');
  }

  const userEmbed = new EmbedBuilder().setTitle(`You have been unmuted in ${interaction.guild?.name}!`).setColor(0x77dd77).setTimestamp();

  const mutedEmbed = new EmbedBuilder().setDescription(`\`✅\` Successfully unmuted <@!${target.id}>!`).setColor(0x77dd77).setTimestamp();

  await member.send({ embeds: [userEmbed] }).catch(() => {
    mutedEmbed.setFooter({ text: 'Failed to DM user!' });
  });

  await member.timeout(null).catch(() => {
    return interaction.editReply('An error occured while unmuting that user!');
  });

  interaction.editReply({ embeds: [mutedEmbed] });
}

// export const options: CommandOptions = {
// deleted: true,
// };

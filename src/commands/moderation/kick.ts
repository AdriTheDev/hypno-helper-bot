import type { CommandData, SlashCommandProps, CommandOptions } from 'commandkit';
import { ApplicationCommandOptionType, EmbedBuilder, GuildMember } from 'discord.js';

export const data: CommandData = {
  name: 'kick',
  description: 'kicks a member from the server!',
  dm_permission: false,
  options: [
    {
      name: 'member',
      description: 'The member to kick',
      type: ApplicationCommandOptionType.User,
      required: true,
    },
    {
      name: 'reason',
      description: 'The reason for the kick',
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
};

export async function run({ interaction, client, handler }: SlashCommandProps) {
  let msg = await interaction.deferReply({ fetchReply: true });

  const target = interaction.options.getUser('member') || interaction.user;
  const reason = interaction.options.getString('reason') || 'No reason provided';
  const member = interaction.guild?.members.cache.get(target.id);
  const intMember = interaction.guild?.members.cache.get(interaction.user.id) as GuildMember;

  if (target.id === interaction.user.id) {
    return interaction.editReply('You cannot kick yourself!');
  } else if (target.id === client.user?.id) {
    return interaction.editReply('You cannot kick me!');
  } else if (!member) {
    return interaction.editReply('That user is not in the server!');
  } else if (!member.kickable) {
    return interaction.editReply('I cannot kick that user!');
  } else if (intMember.roles.highest.position <= member.roles.highest.position) {
    return interaction.editReply('You cannot kick that user!');
  }

  const userEmbed = new EmbedBuilder()
    .setTitle(`You have been kicked from ${interaction.guild?.name}!`)
    .setDescription(`Reason: ${reason}`)
    .setColor(0xff6961)
    .setTimestamp();

  const bannedEmbed = new EmbedBuilder().setDescription(`\`✅\` Successfully kicked ${target.username}! || ${reason}`).setColor(0x77dd77).setTimestamp();

  await member.send({ embeds: [userEmbed] }).catch(() => {
    bannedEmbed.setFooter({ text: 'Failed to DM user!' });
  });

  // await member.kick(reason).catch(() => {
  // 	return interaction.editReply("An error occured while kicking that user!");
  // });

  interaction.editReply({ embeds: [bannedEmbed] });
}

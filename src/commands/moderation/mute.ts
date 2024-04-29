import type { CommandData, SlashCommandProps, CommandOptions } from 'commandkit';
import { ApplicationCommandOptionType, EmbedBuilder, GuildMember } from 'discord.js';
import ms from 'ms';

export const data: CommandData = {
  name: 'mute',
  description: 'Mutes a member in the server!',
  dm_permission: false,
  options: [
    {
      name: 'member',
      description: 'The member to mute',
      type: ApplicationCommandOptionType.User,
      required: true,
    },
    {
      name: 'reason',
      description: 'The reason for the mute',
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: 'time',
      description: 'The time to mute the user for (in minutes)',
      type: ApplicationCommandOptionType.String,
      required: false,
      choices: [
        {
          name: '5 minutes',
          value: '300000',
        },
        {
          name: '10 minutes',
          value: '600000',
        },
        {
          name: '30 minutes',
          value: '1800000',
        },
        {
          name: '1 hour',
          value: '3600000',
        },
        {
          name: '6 hours',
          value: '21600000',
        },
        {
          name: '1 day',
          value: '86400000',
        },
        {
          name: '1 week',
          value: '604800000',
        },
      ],
    },
  ],
};

export async function run({ interaction, client, handler }: SlashCommandProps) {
  await interaction.deferReply({ ephemeral: true });

  let target = interaction.options.getUser('member') || interaction.user;
  let reason = interaction.options.getString('reason') || 'No reason provided';
  let time = interaction.options.getString('time') || '21600000';
  let member = interaction.guild?.members.cache.get(target.id);
  let intMember = interaction.guild?.members.cache.get(interaction.user.id) as GuildMember;
  const duration = parseInt(time);

  if (target.id === interaction.user.id) {
    return interaction.editReply('You cannot mute yourself!');
  } else if (target.id === client.user?.id) {
    return interaction.editReply('You cannot mute me!');
  } else if (!member) {
    return interaction.editReply('That user is not in the server!');
  } else if (!member.kickable) {
    return interaction.editReply('I cannot mute that user!');
  } else if (intMember.roles.highest.position <= member.roles.highest.position) {
    return interaction.editReply('You cannot mute that user!');
  }

  const userEmbed = new EmbedBuilder()
    .setTitle(`You have been muted in ${interaction.guild?.name}!`)
    .setDescription(`Reason: ${reason}\nDuration: ${ms(duration, { long: true })}`)
    .setColor(0xff6961)
    .setTimestamp();

  const mutedEmbed = new EmbedBuilder()
    .setDescription(`\`✅\` Successfully muted <@!${target.id}>!\n**Reason:** ${reason}\n**Duration:** ${ms(duration, { long: true })}`)
    .setColor(0x77dd77)
    .setTimestamp();

  await member.send({ embeds: [userEmbed] }).catch(() => {
    mutedEmbed.setFooter({ text: 'Failed to DM user!' });
  });

  await member.timeout(parseInt(time)).catch(() => {
    return interaction.editReply('An error occured while muting that user!');
  });

  interaction.editReply({ embeds: [mutedEmbed] });
}

export const options: CommandOptions = {
  userPermissions: 'ModerateMembers',
};

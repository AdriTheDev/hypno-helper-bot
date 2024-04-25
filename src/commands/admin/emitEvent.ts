import type { CommandData, SlashCommandProps, CommandOptions } from 'commandkit';
import { ApplicationCommandOptionType, EmbedBuilder, GuildMember } from 'discord.js';

export const data: CommandData = {
  name: 'emit',
  description: 'emit an event on the bot',
  dm_permission: false,
  options: [
    {
      name: 'event',
      description: 'the event to emit',
      type: ApplicationCommandOptionType.String,
      required: true,
      choices: [
        {
          name: 'guildMemberAdd',
          value: 'guildMemberAdd',
        },
      ],
    },
  ],
};

export async function run({ interaction, client, handler }: SlashCommandProps) {
  const event = interaction.options.getString('event') || '';

  switch (event) {
    case 'guildMemberAdd':
      const member = interaction.member as GuildMember;
      interaction.client.emit('guildMemberAdd', member);

      interaction.reply({ content: `Emitted event \`${event}\``, ephemeral: true });
      break;
    default:
      interaction.reply('Invalid event');
      break;
  }
}

export const options: CommandOptions = {
  userPermissions: 'Administrator',
  devOnly: false,
};

import type { CommandData, SlashCommandProps, CommandOptions } from 'commandkit';
import { ApplicationCommandOptionType, EmbedBuilder, GuildTextBasedChannel } from 'discord.js';
import suggestionSchema from '../../schemas/suggestionSchema';

export const data: CommandData = {
  name: 'suggestion',
  description: 'Commands related to suggestions',
  dm_permission: false,
  options: [
    {
      name: 'accept',
      description: 'Accept a suggestion',
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: 'suggestion-id',
          description: 'The suggestion ID to accept',
          type: ApplicationCommandOptionType.String,
          required: true,
        },
        {
          name: 'reason',
          description: 'The reason for accepting the suggestion',
          type: ApplicationCommandOptionType.String,
          required: true,
        },
      ],
    },
    {
      name: 'reject',
      description: 'Reject a suggestion',
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: 'suggestion-id',
          description: 'The suggestion ID to reject',
          type: ApplicationCommandOptionType.String,
          required: true,
        },
        {
          name: 'reason',
          description: 'The reason for rejecting the suggestion',
          type: ApplicationCommandOptionType.String,
          required: true,
        },
      ],
    },
  ],
};

export async function run({ interaction, client, handler }: SlashCommandProps) {
  await interaction.deferReply({ ephemeral: true });

  const suggestionId = interaction.options.getString('suggestion-id') || '';
  const reason = interaction.options.getString('reason') || '';
  const subcmd = interaction.options.getSubcommand();

  const suggestionData = await suggestionSchema.findOne({ guildId: interaction.guildId });
  if (!suggestionData) return;

  const { channelId } = suggestionData;

  const suggestionChannel = interaction.guild?.channels.cache.get(channelId) as GuildTextBasedChannel;
  const suggestionMessage = await suggestionChannel?.messages.fetch(suggestionId);

  switch (subcmd) {
    case 'accept':
      try {
        const data = suggestionMessage?.embeds[0];

        const acceptedEmbed = new EmbedBuilder()
          .setTitle('Suggestion Accepted!')
          .setAuthor({ name: data?.author?.name ?? '', iconURL: data?.author?.iconURL ?? '' })
          .setColor(0x77dd77)
          .setFooter({ text: `Suggestion ID: ${suggestionId}` })
          .addFields({ name: 'Suggestion', value: data?.description ?? '' }, { name: 'Reason', value: reason });

        await suggestionMessage?.edit({ embeds: [acceptedEmbed] });

        await interaction.editReply('Suggestion accepted!');

        suggestionMessage?.reactions.removeAll();
      } catch (err) {
        return interaction.editReply('Invalid suggestion ID!');
      }

      break;
    case 'reject':
      try {
        const data = suggestionMessage?.embeds[0];

        const acceptedEmbed = new EmbedBuilder()
          .setTitle('Suggestion Rejected.')
          .setAuthor({ name: data?.author?.name ?? '', iconURL: data?.author?.iconURL ?? '' })
          .setColor(0xff6961)
          .setFooter({ text: `Suggestion ID: ${suggestionId}` })
          .addFields({ name: 'Suggestion', value: data?.description ?? '' }, { name: 'Reason', value: reason });

        await suggestionMessage?.edit({ embeds: [acceptedEmbed] });

        await interaction.editReply('Suggestion accepted!');

        suggestionMessage?.reactions.removeAll();
      } catch (err) {
        return interaction.editReply('Invalid suggestion ID!');
      }

      break;
  }
}

export const options: CommandOptions = {
  userPermissions: 'ManageGuild',
};

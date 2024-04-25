import type { CommandData, SlashCommandProps, CommandOptions } from 'commandkit';
import { ApplicationCommandOptionType, ChannelType, EmbedBuilder, TextChannel } from 'discord.js';
import suggestionSchema from '../../schemas/suggestionSchema';
import welcomeSchema from '../../schemas/welcomeSchema';

export const data: CommandData = {
  name: 'setup',
  description: 'setup different systems in the server',
  dm_permission: false,
  options: [
    {
      name: 'welcome',
      description: 'setup the welcome system',
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: 'channel',
          description: 'set the welcome channel',
          type: ApplicationCommandOptionType.Channel,
          channel_types: [ChannelType.GuildText],
          required: true,
        },
        {
          name: 'message',
          description: 'set the welcome message (use {user} to mention the user)',
          type: ApplicationCommandOptionType.String,
          required: true,
        },
      ],
    },
    {
      name: 'suggestions',
      description: 'set the suggestions channel',
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: 'channel',
          description: 'set the suggestions channel',
          type: ApplicationCommandOptionType.Channel,
          channel_types: [ChannelType.GuildText],
          required: true,
        },
      ],
    },
  ],
};

export async function run({ interaction, client, handler }: SlashCommandProps) {
  await interaction.deferReply({ ephemeral: true });

  let subcommand = interaction.options.getSubcommand();

  switch (subcommand) {
    case 'welcome':
      let channel = interaction.options.getChannel('channel') as TextChannel;
      let message = interaction.options.getString('message') || '';

      let welcomeData = await welcomeSchema.findOne({ guildId: interaction.guildId });
      if (welcomeData) {
        welcomeData.channelId = channel.id;
        welcomeData.message = message;
        welcomeData.save();

        let embed = new EmbedBuilder()
          .setTitle('Welcome System')
          .setDescription(`Welcome channel set to ${channel} and welcome message set to \`${message}\``)
          .setColor(0x9b6dff)
          .setTimestamp();

        interaction.editReply({ embeds: [embed] });
      } else {
        let newData = new welcomeSchema({
          channelId: channel.id,
          guildId: interaction.guildId,
          message: message,
        });
        newData.save();

        let embed = new EmbedBuilder()
          .setTitle('Welcome System')
          .setDescription(`Welcome channel set to ${channel} and welcome message set to \`${message}\``)
          .setColor(0x9b6dff)
          .setTimestamp();

        interaction.editReply({ embeds: [embed] });
      }
      break;
    case 'suggestions':
      let suggestionChannel = interaction.options.getChannel('channel') as TextChannel;

      let suggestionData = await suggestionSchema.findOne({ guildId: interaction.guildId });

      if (suggestionData) {
        suggestionData.channelId = suggestionChannel.id;
        suggestionData.save();

        let embed = new EmbedBuilder()
          .setTitle('Suggestions System')
          .setDescription(`Suggestions channel set to ${suggestionChannel}`)
          .setColor(0x9b6dff)
          .setTimestamp();

        interaction.editReply({ embeds: [embed] });
      } else {
        let newData = new suggestionSchema({
          channelId: suggestionChannel.id,
          guildId: interaction.guildId,
        });
        newData.save();

        let embed = new EmbedBuilder()
          .setTitle('Suggestions System')
          .setDescription(`Suggestions channel set to ${suggestionChannel}`)
          .setColor(0x9b6dff)
          .setTimestamp();

        interaction.editReply({ embeds: [embed] });
      }
      break;
    default:
      interaction.editReply({ content: "That's not a valid subcommand!" });
      break;
  }
}

export const options: CommandOptions = {
  userPermissions: 'Administrator',
};

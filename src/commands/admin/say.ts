import type { CommandData, CommandOptions, SlashCommandProps } from 'commandkit';
import { ApplicationCommandOptionType, ChannelType, EmbedBuilder, GuildTextBasedChannel } from 'discord.js';

export const data: CommandData = {
  name: 'say',
  description: 'says something as the bot',
  dm_permission: false,
  options: [
    {
      name: 'message',
      description: 'the message to say',
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: 'channel',
      description: 'the channel to say it in (cannot be used with reply-id)',
      type: ApplicationCommandOptionType.Channel,
      channel_types: [ChannelType.GuildText],
      required: false,
    },
    {
      name: 'reply-id',
      description: 'message to reply to (if any)',
      type: ApplicationCommandOptionType.String,
      required: false,
    },
  ],
};

export async function run({ interaction, client, handler }: SlashCommandProps) {
  const message = interaction.options.getString('message');
  const channel = interaction.options.getChannel('channel') as GuildTextBasedChannel;
  const replyId = interaction.options.getString('reply-id');

  if (!message) return interaction.reply({ content: 'Please provide a message to say', ephemeral: true });
  if (message.length > 2000) return interaction.reply({ content: 'Message must be less than 2000 characters', ephemeral: true });

  if (!replyId) {
    if (!channel) {
      interaction.channel?.send({ content: message });
    } else {
      channel.send({ content: message });
    }
  } else {
    const replyMessage = await interaction.channel?.messages.fetch(replyId);
    if (!replyMessage) return interaction.reply({ content: 'Could not find message to reply to', ephemeral: true });

    replyMessage.reply({ content: message });
  }

  await interaction.reply({ content: 'Message sent', ephemeral: true });
}

export const options: CommandOptions = {
  userPermissions: 'Administrator',
};

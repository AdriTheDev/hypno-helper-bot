import { EmbedBuilder, Client, Message, ChannelType } from 'discord.js';
import type { CommandKit } from 'commandkit';
import suggestionSchema from '../../schemas/suggestionSchema';

export default async function (message: Message, client: Client<true>, handler: CommandKit) {
  if (message.author.bot) return;
  if (message.channel.type !== ChannelType.GuildText) return;

  const suggestionData = await suggestionSchema.findOne({ guildId: message.guildId });
  if (!suggestionData) return;

  const { channelId } = suggestionData;
  if (message.channelId !== channelId) return;

  const embed = new EmbedBuilder()
    .setAuthor({ name: message.author.username, iconURL: message.author.displayAvatarURL() })
    .setDescription(message.content)
    .setTitle('New suggestion!')
    .setColor(0x9b6dff);

  message.channel.send({ embeds: [embed] }).then(async (msg) => {
    await msg.react('👍');
    await msg.react('👎');
    message.delete();
    msg
      .startThread({
        name: 'Suggestion discussion',
        autoArchiveDuration: 60,
      })
      .then((thread) => {
        thread.members.add(message.author.id);
      });
    msg.edit({ embeds: [embed.setFooter({ text: `Suggestion ID: ${msg.id}` })] });
  });
}

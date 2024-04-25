import { AttachmentBuilder, type Client, type GuildMember, type GuildTextBasedChannel } from 'discord.js';
import welcomeSchema from '../../schemas/welcomeSchema';
import GreetingsCard from '../../cards/greetingCard';
import type { CommandKit } from 'commandkit';
import { Font } from 'canvacord';

export default async function (member: GuildMember, client: Client<true>, handler: CommandKit) {
  const welcomeData = await welcomeSchema.findOne({ guildId: member.guild.id });
  if (!welcomeData) return;

  const channel = member.guild.channels.cache.get(welcomeData.channelId) as GuildTextBasedChannel;
  if (!channel) return;

  const guild = member.guild;

  Font.loadDefault();
  await Font.fromFile('src/fonts/Rubik-Bold.ttf');
  const card = new GreetingsCard()
    .setAvatar(member.user.displayAvatarURL())
    .setDisplayName(member.displayName)
    .setType('welcome')
    .setMessage(`Thanks for joining! You are member #${guild.memberCount}!`);

  const attachment = new AttachmentBuilder(await card.build({ format: 'png' }), { name: 'welcome.png' });
  channel.send({ content: welcomeData.message.replace('{user}', member).replace('{n}', '\n'), files: [attachment] });
}

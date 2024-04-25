import type { CommandData, SlashCommandProps, CommandOptions } from 'commandkit';
import { ApplicationCommandOptionType, EmbedBuilder, time, discordSort, GuildMember, Guild } from 'discord.js';
import child_process from 'child_process';
import configJson from '../../../package.json';

export const data: CommandData = {
  name: 'info',
  description: 'gets info about various things',
  dm_permission: false,
  options: [
    {
      name: 'bot',
      description: "get's info about the bot",
      type: ApplicationCommandOptionType.Subcommand,
    },
    {
      name: 'user',
      description: "get's info about a user",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: 'user',
          description: 'the user to get info about',
          type: ApplicationCommandOptionType.User,
          required: false,
        },
      ],
    },
    {
      name: 'server',
      description: "get's info about the server",
      type: ApplicationCommandOptionType.Subcommand,
    },
  ],
};

export async function run({ interaction, client, handler }: SlashCommandProps) {
  await interaction.deferReply({ fetchReply: true });

  let { options } = interaction;

  let subcmd = options.getSubcommand();

  let infoEmbed = new EmbedBuilder().setColor(0x9b6dff).setTimestamp();

  switch (subcmd) {
    case 'bot':
      infoEmbed.setTitle('Bot Info').setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() });

      let uptime = new Date(Date.now() - client.uptime);

      infoEmbed.addFields(
        { name: 'Bot Latency', value: `\`${Date.now() - interaction.createdTimestamp}ms\``, inline: true },
        { name: 'WS Latency', value: `\`${client.ws.ping}ms\``, inline: true },
        { name: 'Uptime', value: `${time(uptime, 'R')}`, inline: true },
        { name: 'Discord.js Version', value: `\`${configJson.dependencies['discord.js'].substring(1)}\``, inline: true },
        { name: 'Node.js Version', value: `\`${process.version}\``, inline: true },
        { name: 'Memory Usage', value: `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB\``, inline: true }
      );

      infoEmbed.setThumbnail(client.user.displayAvatarURL());

      interaction.editReply({ embeds: [infoEmbed] });
      break;
    case 'user':
      const user = options.getUser('user') || interaction.user;
      const member = (await interaction.guild?.members.fetch(user.id)) as GuildMember;

      infoEmbed.setTitle('User Info').setAuthor({ name: user.tag, iconURL: user.displayAvatarURL() });

      infoEmbed.addFields(
        { name: 'ID', value: `\`${user.id}\``, inline: true },
        { name: 'Bot', value: `\`${user.bot ? 'Yes' : 'No'}\``, inline: true },
        { name: 'Created At', value: `${time(user.createdAt, 'R')}`, inline: true },
        { name: 'Joined At', value: `${time(member.joinedAt as Date, 'R') ?? 'Not in server'}`, inline: true },
        { name: 'Highest Role', value: `${discordSort(member.roles.cache).last()?.toString() || 'none'}`, inline: true }
      );

      infoEmbed.setThumbnail(user.displayAvatarURL());

      interaction.editReply({ embeds: [infoEmbed] });
      break;
    case 'server':
      const guild = interaction.guild as Guild;

      const icon = guild.iconURL() || 'https://cdn.discordapp.com/embed/avatars/0.png';

      infoEmbed.setTitle('Server Info').setAuthor({ name: guild.name, iconURL: icon });

      infoEmbed.addFields(
        { name: 'ID', value: `\`${guild.id}\``, inline: true },
        { name: 'Owner', value: `<@!${guild.ownerId}>`, inline: true },
        { name: 'Created At', value: `${time(guild.createdAt, 'R')}`, inline: true },
        { name: 'Member Count', value: `\`${guild.memberCount}\``, inline: true },
        { name: 'Channel Count', value: `\`${guild.channels.cache.size}\``, inline: true },
        { name: 'Role Count', value: `\`${guild.roles.cache.size}\``, inline: true },
        { name: 'Boosts', value: `\`${guild.premiumSubscriptionCount}\``, inline: true }
      );

      infoEmbed.setThumbnail(guild.iconURL());

      interaction.editReply({ embeds: [infoEmbed] });
      break;
  }
}

// export const options: CommandOptions = {
// 	deleted: true,
// };

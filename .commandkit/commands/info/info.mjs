import "../../chunk-LJIZ45IO.mjs";
import {
  __name
} from "../../chunk-G5GHKT7C.mjs";

// src/commands/info/info.ts
import { ApplicationCommandOptionType, EmbedBuilder, time, discordSort } from "discord.js";

// package.json
var package_default = {
  name: "hypno-helper-bot",
  version: "1.0.0",
  description: "Hypno Helper Discord bot",
  main: "src/index.mjs",
  scripts: {
    dev: "commandkit dev"
  },
  repository: {
    type: "git",
    url: "git+https://github.com/AdriTheDev/hypno-helper-bot.git"
  },
  author: "AdriTheDev",
  license: "MIT",
  bugs: {
    url: "https://github.com/AdriTheDev/hypno-helper-bot/issues"
  },
  homepage: "https://github.com/AdriTheDev/hypno-helper-bot#readme",
  dependencies: {
    canvacord: "^6.0.2",
    commandkit: "^0.1.10",
    "discord.js": "^14.14.1",
    dotenv: "^16.4.5",
    mongoose: "^8.3.2"
  },
  devDependencies: {
    "@types/node": "^20.12.7",
    "@types/react": "^18.2.79",
    nodemon: "^3.1.0",
    tsx: "^4.7.2",
    typescript: "^5.4.5"
  }
};

// src/commands/info/info.ts
var data = {
  name: "info",
  description: "gets info about various things",
  dm_permission: false,
  options: [
    {
      name: "bot",
      description: "get's info about the bot",
      type: ApplicationCommandOptionType.Subcommand
    },
    {
      name: "user",
      description: "get's info about a user",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: "user",
          description: "the user to get info about",
          type: ApplicationCommandOptionType.User,
          required: false
        }
      ]
    },
    {
      name: "server",
      description: "get's info about the server",
      type: ApplicationCommandOptionType.Subcommand
    }
  ]
};
async function run({ interaction, client, handler }) {
  await interaction.deferReply({ fetchReply: true });
  let { options } = interaction;
  let subcmd = options.getSubcommand();
  let infoEmbed = new EmbedBuilder().setColor(10186239).setTimestamp();
  switch (subcmd) {
    case "bot":
      infoEmbed.setTitle("Bot Info").setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() });
      let uptime = new Date(Date.now() - client.uptime);
      infoEmbed.addFields(
        { name: "Bot Latency", value: `\`${Date.now() - interaction.createdTimestamp}ms\``, inline: true },
        { name: "WS Latency", value: `\`${client.ws.ping}ms\``, inline: true },
        { name: "Uptime", value: `${time(uptime, "R")}`, inline: true },
        { name: "Discord.js Version", value: `\`${package_default.dependencies["discord.js"].substring(1)}\``, inline: true },
        { name: "Node.js Version", value: `\`${process.version}\``, inline: true },
        { name: "Memory Usage", value: `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB\``, inline: true }
      );
      infoEmbed.setThumbnail(client.user.displayAvatarURL());
      interaction.editReply({ embeds: [infoEmbed] });
      break;
    case "user":
      const user = options.getUser("user") || interaction.user;
      const member = await interaction.guild?.members.fetch(user.id);
      infoEmbed.setTitle("User Info").setAuthor({ name: user.tag, iconURL: user.displayAvatarURL() });
      infoEmbed.addFields(
        { name: "ID", value: `\`${user.id}\``, inline: true },
        { name: "Bot", value: `\`${user.bot ? "Yes" : "No"}\``, inline: true },
        { name: "Created At", value: `${time(user.createdAt, "R")}`, inline: true },
        { name: "Joined At", value: `${time(member.joinedAt, "R") ?? "Not in server"}`, inline: true },
        { name: "Highest Role", value: `${discordSort(member.roles.cache).last()?.toString() || "none"}`, inline: true }
      );
      infoEmbed.setThumbnail(user.displayAvatarURL());
      interaction.editReply({ embeds: [infoEmbed] });
      break;
    case "server":
      const guild = interaction.guild;
      const icon = guild.iconURL() || "https://cdn.discordapp.com/embed/avatars/0.png";
      infoEmbed.setTitle("Server Info").setAuthor({ name: guild.name, iconURL: icon });
      infoEmbed.addFields(
        { name: "ID", value: `\`${guild.id}\``, inline: true },
        { name: "Owner", value: `<@!${guild.ownerId}>`, inline: true },
        { name: "Created At", value: `${time(guild.createdAt, "R")}`, inline: true },
        { name: "Member Count", value: `\`${guild.memberCount}\``, inline: true },
        { name: "Channel Count", value: `\`${guild.channels.cache.size}\``, inline: true },
        { name: "Role Count", value: `\`${guild.roles.cache.size}\``, inline: true },
        { name: "Boosts", value: `\`${guild.premiumSubscriptionCount}\``, inline: true }
      );
      infoEmbed.setThumbnail(guild.iconURL());
      interaction.editReply({ embeds: [infoEmbed] });
      break;
  }
}
__name(run, "run");
export {
  data,
  run
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2luZm8vaW5mby50cyIsICIuLi8uLi8uLi9wYWNrYWdlLmpzb24iXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB0eXBlIHsgQ29tbWFuZERhdGEsIFNsYXNoQ29tbWFuZFByb3BzLCBDb21tYW5kT3B0aW9ucyB9IGZyb20gJ2NvbW1hbmRraXQnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25Db21tYW5kT3B0aW9uVHlwZSwgRW1iZWRCdWlsZGVyLCB0aW1lLCBkaXNjb3JkU29ydCwgR3VpbGRNZW1iZXIsIEd1aWxkIH0gZnJvbSAnZGlzY29yZC5qcyc7XG5pbXBvcnQgY2hpbGRfcHJvY2VzcyBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCBjb25maWdKc29uIGZyb20gJy4uLy4uLy4uL3BhY2thZ2UuanNvbic7XG5cbmV4cG9ydCBjb25zdCBkYXRhOiBDb21tYW5kRGF0YSA9IHtcbiAgbmFtZTogJ2luZm8nLFxuICBkZXNjcmlwdGlvbjogJ2dldHMgaW5mbyBhYm91dCB2YXJpb3VzIHRoaW5ncycsXG4gIGRtX3Blcm1pc3Npb246IGZhbHNlLFxuICBvcHRpb25zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2JvdCcsXG4gICAgICBkZXNjcmlwdGlvbjogXCJnZXQncyBpbmZvIGFib3V0IHRoZSBib3RcIixcbiAgICAgIHR5cGU6IEFwcGxpY2F0aW9uQ29tbWFuZE9wdGlvblR5cGUuU3ViY29tbWFuZCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICd1c2VyJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBcImdldCdzIGluZm8gYWJvdXQgYSB1c2VyXCIsXG4gICAgICB0eXBlOiBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlLlN1YmNvbW1hbmQsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAndXNlcicsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICd0aGUgdXNlciB0byBnZXQgaW5mbyBhYm91dCcsXG4gICAgICAgICAgdHlwZTogQXBwbGljYXRpb25Db21tYW5kT3B0aW9uVHlwZS5Vc2VyLFxuICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnc2VydmVyJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBcImdldCdzIGluZm8gYWJvdXQgdGhlIHNlcnZlclwiLFxuICAgICAgdHlwZTogQXBwbGljYXRpb25Db21tYW5kT3B0aW9uVHlwZS5TdWJjb21tYW5kLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuKHsgaW50ZXJhY3Rpb24sIGNsaWVudCwgaGFuZGxlciB9OiBTbGFzaENvbW1hbmRQcm9wcykge1xuICBhd2FpdCBpbnRlcmFjdGlvbi5kZWZlclJlcGx5KHsgZmV0Y2hSZXBseTogdHJ1ZSB9KTtcblxuICBsZXQgeyBvcHRpb25zIH0gPSBpbnRlcmFjdGlvbjtcblxuICBsZXQgc3ViY21kID0gb3B0aW9ucy5nZXRTdWJjb21tYW5kKCk7XG5cbiAgbGV0IGluZm9FbWJlZCA9IG5ldyBFbWJlZEJ1aWxkZXIoKS5zZXRDb2xvcigweDliNmRmZikuc2V0VGltZXN0YW1wKCk7XG5cbiAgc3dpdGNoIChzdWJjbWQpIHtcbiAgICBjYXNlICdib3QnOlxuICAgICAgaW5mb0VtYmVkLnNldFRpdGxlKCdCb3QgSW5mbycpLnNldEF1dGhvcih7IG5hbWU6IGNsaWVudC51c2VyLnVzZXJuYW1lLCBpY29uVVJMOiBjbGllbnQudXNlci5kaXNwbGF5QXZhdGFyVVJMKCkgfSk7XG5cbiAgICAgIGxldCB1cHRpbWUgPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gY2xpZW50LnVwdGltZSk7XG5cbiAgICAgIGluZm9FbWJlZC5hZGRGaWVsZHMoXG4gICAgICAgIHsgbmFtZTogJ0JvdCBMYXRlbmN5JywgdmFsdWU6IGBcXGAke0RhdGUubm93KCkgLSBpbnRlcmFjdGlvbi5jcmVhdGVkVGltZXN0YW1wfW1zXFxgYCwgaW5saW5lOiB0cnVlIH0sXG4gICAgICAgIHsgbmFtZTogJ1dTIExhdGVuY3knLCB2YWx1ZTogYFxcYCR7Y2xpZW50LndzLnBpbmd9bXNcXGBgLCBpbmxpbmU6IHRydWUgfSxcbiAgICAgICAgeyBuYW1lOiAnVXB0aW1lJywgdmFsdWU6IGAke3RpbWUodXB0aW1lLCAnUicpfWAsIGlubGluZTogdHJ1ZSB9LFxuICAgICAgICB7IG5hbWU6ICdEaXNjb3JkLmpzIFZlcnNpb24nLCB2YWx1ZTogYFxcYCR7Y29uZmlnSnNvbi5kZXBlbmRlbmNpZXNbJ2Rpc2NvcmQuanMnXS5zdWJzdHJpbmcoMSl9XFxgYCwgaW5saW5lOiB0cnVlIH0sXG4gICAgICAgIHsgbmFtZTogJ05vZGUuanMgVmVyc2lvbicsIHZhbHVlOiBgXFxgJHtwcm9jZXNzLnZlcnNpb259XFxgYCwgaW5saW5lOiB0cnVlIH0sXG4gICAgICAgIHsgbmFtZTogJ01lbW9yeSBVc2FnZScsIHZhbHVlOiBgXFxgJHsocHJvY2Vzcy5tZW1vcnlVc2FnZSgpLmhlYXBVc2VkIC8gMTAyNCAvIDEwMjQpLnRvRml4ZWQoMil9TUJcXGBgLCBpbmxpbmU6IHRydWUgfVxuICAgICAgKTtcblxuICAgICAgaW5mb0VtYmVkLnNldFRodW1ibmFpbChjbGllbnQudXNlci5kaXNwbGF5QXZhdGFyVVJMKCkpO1xuXG4gICAgICBpbnRlcmFjdGlvbi5lZGl0UmVwbHkoeyBlbWJlZHM6IFtpbmZvRW1iZWRdIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndXNlcic6XG4gICAgICBjb25zdCB1c2VyID0gb3B0aW9ucy5nZXRVc2VyKCd1c2VyJykgfHwgaW50ZXJhY3Rpb24udXNlcjtcbiAgICAgIGNvbnN0IG1lbWJlciA9IChhd2FpdCBpbnRlcmFjdGlvbi5ndWlsZD8ubWVtYmVycy5mZXRjaCh1c2VyLmlkKSkgYXMgR3VpbGRNZW1iZXI7XG5cbiAgICAgIGluZm9FbWJlZC5zZXRUaXRsZSgnVXNlciBJbmZvJykuc2V0QXV0aG9yKHsgbmFtZTogdXNlci50YWcsIGljb25VUkw6IHVzZXIuZGlzcGxheUF2YXRhclVSTCgpIH0pO1xuXG4gICAgICBpbmZvRW1iZWQuYWRkRmllbGRzKFxuICAgICAgICB7IG5hbWU6ICdJRCcsIHZhbHVlOiBgXFxgJHt1c2VyLmlkfVxcYGAsIGlubGluZTogdHJ1ZSB9LFxuICAgICAgICB7IG5hbWU6ICdCb3QnLCB2YWx1ZTogYFxcYCR7dXNlci5ib3QgPyAnWWVzJyA6ICdObyd9XFxgYCwgaW5saW5lOiB0cnVlIH0sXG4gICAgICAgIHsgbmFtZTogJ0NyZWF0ZWQgQXQnLCB2YWx1ZTogYCR7dGltZSh1c2VyLmNyZWF0ZWRBdCwgJ1InKX1gLCBpbmxpbmU6IHRydWUgfSxcbiAgICAgICAgeyBuYW1lOiAnSm9pbmVkIEF0JywgdmFsdWU6IGAke3RpbWUobWVtYmVyLmpvaW5lZEF0IGFzIERhdGUsICdSJykgPz8gJ05vdCBpbiBzZXJ2ZXInfWAsIGlubGluZTogdHJ1ZSB9LFxuICAgICAgICB7IG5hbWU6ICdIaWdoZXN0IFJvbGUnLCB2YWx1ZTogYCR7ZGlzY29yZFNvcnQobWVtYmVyLnJvbGVzLmNhY2hlKS5sYXN0KCk/LnRvU3RyaW5nKCkgfHwgJ25vbmUnfWAsIGlubGluZTogdHJ1ZSB9XG4gICAgICApO1xuXG4gICAgICBpbmZvRW1iZWQuc2V0VGh1bWJuYWlsKHVzZXIuZGlzcGxheUF2YXRhclVSTCgpKTtcblxuICAgICAgaW50ZXJhY3Rpb24uZWRpdFJlcGx5KHsgZW1iZWRzOiBbaW5mb0VtYmVkXSB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3NlcnZlcic6XG4gICAgICBjb25zdCBndWlsZCA9IGludGVyYWN0aW9uLmd1aWxkIGFzIEd1aWxkO1xuXG4gICAgICBjb25zdCBpY29uID0gZ3VpbGQuaWNvblVSTCgpIHx8ICdodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9lbWJlZC9hdmF0YXJzLzAucG5nJztcblxuICAgICAgaW5mb0VtYmVkLnNldFRpdGxlKCdTZXJ2ZXIgSW5mbycpLnNldEF1dGhvcih7IG5hbWU6IGd1aWxkLm5hbWUsIGljb25VUkw6IGljb24gfSk7XG5cbiAgICAgIGluZm9FbWJlZC5hZGRGaWVsZHMoXG4gICAgICAgIHsgbmFtZTogJ0lEJywgdmFsdWU6IGBcXGAke2d1aWxkLmlkfVxcYGAsIGlubGluZTogdHJ1ZSB9LFxuICAgICAgICB7IG5hbWU6ICdPd25lcicsIHZhbHVlOiBgPEAhJHtndWlsZC5vd25lcklkfT5gLCBpbmxpbmU6IHRydWUgfSxcbiAgICAgICAgeyBuYW1lOiAnQ3JlYXRlZCBBdCcsIHZhbHVlOiBgJHt0aW1lKGd1aWxkLmNyZWF0ZWRBdCwgJ1InKX1gLCBpbmxpbmU6IHRydWUgfSxcbiAgICAgICAgeyBuYW1lOiAnTWVtYmVyIENvdW50JywgdmFsdWU6IGBcXGAke2d1aWxkLm1lbWJlckNvdW50fVxcYGAsIGlubGluZTogdHJ1ZSB9LFxuICAgICAgICB7IG5hbWU6ICdDaGFubmVsIENvdW50JywgdmFsdWU6IGBcXGAke2d1aWxkLmNoYW5uZWxzLmNhY2hlLnNpemV9XFxgYCwgaW5saW5lOiB0cnVlIH0sXG4gICAgICAgIHsgbmFtZTogJ1JvbGUgQ291bnQnLCB2YWx1ZTogYFxcYCR7Z3VpbGQucm9sZXMuY2FjaGUuc2l6ZX1cXGBgLCBpbmxpbmU6IHRydWUgfSxcbiAgICAgICAgeyBuYW1lOiAnQm9vc3RzJywgdmFsdWU6IGBcXGAke2d1aWxkLnByZW1pdW1TdWJzY3JpcHRpb25Db3VudH1cXGBgLCBpbmxpbmU6IHRydWUgfVxuICAgICAgKTtcblxuICAgICAgaW5mb0VtYmVkLnNldFRodW1ibmFpbChndWlsZC5pY29uVVJMKCkpO1xuXG4gICAgICBpbnRlcmFjdGlvbi5lZGl0UmVwbHkoeyBlbWJlZHM6IFtpbmZvRW1iZWRdIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuLy8gZXhwb3J0IGNvbnN0IG9wdGlvbnM6IENvbW1hbmRPcHRpb25zID0ge1xuLy8gXHRkZWxldGVkOiB0cnVlLFxuLy8gfTtcbiIsICJ7XG4gIFwibmFtZVwiOiBcImh5cG5vLWhlbHBlci1ib3RcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMS4wLjBcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkh5cG5vIEhlbHBlciBEaXNjb3JkIGJvdFwiLFxuICBcIm1haW5cIjogXCJzcmMvaW5kZXgubWpzXCIsXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJkZXZcIjogXCJjb21tYW5ka2l0IGRldlwiXG4gIH0sXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJnaXQraHR0cHM6Ly9naXRodWIuY29tL0FkcmlUaGVEZXYvaHlwbm8taGVscGVyLWJvdC5naXRcIlxuICB9LFxuICBcImF1dGhvclwiOiBcIkFkcmlUaGVEZXZcIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwiYnVnc1wiOiB7XG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vQWRyaVRoZURldi9oeXBuby1oZWxwZXItYm90L2lzc3Vlc1wiXG4gIH0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2dpdGh1Yi5jb20vQWRyaVRoZURldi9oeXBuby1oZWxwZXItYm90I3JlYWRtZVwiLFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJjYW52YWNvcmRcIjogXCJeNi4wLjJcIixcbiAgICBcImNvbW1hbmRraXRcIjogXCJeMC4xLjEwXCIsXG4gICAgXCJkaXNjb3JkLmpzXCI6IFwiXjE0LjE0LjFcIixcbiAgICBcImRvdGVudlwiOiBcIl4xNi40LjVcIixcbiAgICBcIm1vbmdvb3NlXCI6IFwiXjguMy4yXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjAuMTIuN1wiLFxuICAgIFwiQHR5cGVzL3JlYWN0XCI6IFwiXjE4LjIuNzlcIixcbiAgICBcIm5vZGVtb25cIjogXCJeMy4xLjBcIixcbiAgICBcInRzeFwiOiBcIl40LjcuMlwiLFxuICAgIFwi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
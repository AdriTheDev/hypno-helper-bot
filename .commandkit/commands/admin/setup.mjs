import {
  suggestionSchema_default
} from "../../chunk-2TFZESUE.mjs";
import {
  welcomeSchema_default
} from "../../chunk-TAXVAU2M.mjs";
import "../../chunk-LJIZ45IO.mjs";
import {
  __name
} from "../../chunk-G5GHKT7C.mjs";

// src/commands/admin/setup.ts
import { ApplicationCommandOptionType, ChannelType, EmbedBuilder } from "discord.js";
var data = {
  name: "setup",
  description: "setup different systems in the server",
  dm_permission: false,
  options: [
    {
      name: "welcome",
      description: "setup the welcome system",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: "channel",
          description: "set the welcome channel",
          type: ApplicationCommandOptionType.Channel,
          channel_types: [ChannelType.GuildText],
          required: true
        },
        {
          name: "message",
          description: "set the welcome message (use {user} to mention the user)",
          type: ApplicationCommandOptionType.String,
          required: true
        }
      ]
    },
    {
      name: "suggestions",
      description: "set the suggestions channel",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: "channel",
          description: "set the suggestions channel",
          type: ApplicationCommandOptionType.Channel,
          channel_types: [ChannelType.GuildText],
          required: true
        }
      ]
    }
  ]
};
async function run({ interaction, client, handler }) {
  await interaction.deferReply({ ephemeral: true });
  let subcommand = interaction.options.getSubcommand();
  switch (subcommand) {
    case "welcome":
      let channel = interaction.options.getChannel("channel");
      let message = interaction.options.getString("message") || "";
      let welcomeData = await welcomeSchema_default.findOne({ guildId: interaction.guildId });
      if (welcomeData) {
        welcomeData.channelId = channel.id;
        welcomeData.message = message;
        welcomeData.save();
        let embed = new EmbedBuilder().setTitle("Welcome System").setDescription(`Welcome channel set to ${channel} and welcome message set to \`${message}\``).setColor(10186239).setTimestamp();
        interaction.editReply({ embeds: [embed] });
      } else {
        let newData = new welcomeSchema_default({
          channelId: channel.id,
          guildId: interaction.guildId,
          message
        });
        newData.save();
        let embed = new EmbedBuilder().setTitle("Welcome System").setDescription(`Welcome channel set to ${channel} and welcome message set to \`${message}\``).setColor(10186239).setTimestamp();
        interaction.editReply({ embeds: [embed] });
      }
      break;
    case "suggestions":
      let suggestionChannel = interaction.options.getChannel("channel");
      let suggestionData = await suggestionSchema_default.findOne({ guildId: interaction.guildId });
      if (suggestionData) {
        suggestionData.channelId = suggestionChannel.id;
        suggestionData.save();
        let embed = new EmbedBuilder().setTitle("Suggestions System").setDescription(`Suggestions channel set to ${suggestionChannel}`).setColor(10186239).setTimestamp();
        interaction.editReply({ embeds: [embed] });
      } else {
        let newData = new suggestionSchema_default({
          channelId: suggestionChannel.id,
          guildId: interaction.guildId
        });
        newData.save();
        let embed = new EmbedBuilder().setTitle("Suggestions System").setDescription(`Suggestions channel set to ${suggestionChannel}`).setColor(10186239).setTimestamp();
        interaction.editReply({ embeds: [embed] });
      }
      break;
    default:
      interaction.editReply({ content: "That's not a valid subcommand!" });
      break;
  }
}
__name(run, "run");
var options = {
  userPermissions: "Administrator"
};
export {
  data,
  options,
  run
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2FkbWluL3NldHVwLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgdHlwZSB7IENvbW1hbmREYXRhLCBTbGFzaENvbW1hbmRQcm9wcywgQ29tbWFuZE9wdGlvbnMgfSBmcm9tICdjb21tYW5ka2l0JztcbmltcG9ydCB7IEFwcGxpY2F0aW9uQ29tbWFuZE9wdGlvblR5cGUsIENoYW5uZWxUeXBlLCBFbWJlZEJ1aWxkZXIsIFRleHRDaGFubmVsIH0gZnJvbSAnZGlzY29yZC5qcyc7XG5pbXBvcnQgc3VnZ2VzdGlvblNjaGVtYSBmcm9tICcuLi8uLi9zY2hlbWFzL3N1Z2dlc3Rpb25TY2hlbWEnO1xuaW1wb3J0IHdlbGNvbWVTY2hlbWEgZnJvbSAnLi4vLi4vc2NoZW1hcy93ZWxjb21lU2NoZW1hJztcblxuZXhwb3J0IGNvbnN0IGRhdGE6IENvbW1hbmREYXRhID0ge1xuICBuYW1lOiAnc2V0dXAnLFxuICBkZXNjcmlwdGlvbjogJ3NldHVwIGRpZmZlcmVudCBzeXN0ZW1zIGluIHRoZSBzZXJ2ZXInLFxuICBkbV9wZXJtaXNzaW9uOiBmYWxzZSxcbiAgb3B0aW9uczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICd3ZWxjb21lJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnc2V0dXAgdGhlIHdlbGNvbWUgc3lzdGVtJyxcbiAgICAgIHR5cGU6IEFwcGxpY2F0aW9uQ29tbWFuZE9wdGlvblR5cGUuU3ViY29tbWFuZCxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdjaGFubmVsJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ3NldCB0aGUgd2VsY29tZSBjaGFubmVsJyxcbiAgICAgICAgICB0eXBlOiBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlLkNoYW5uZWwsXG4gICAgICAgICAgY2hhbm5lbF90eXBlczogW0NoYW5uZWxUeXBlLkd1aWxkVGV4dF0sXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnbWVzc2FnZScsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdzZXQgdGhlIHdlbGNvbWUgbWVzc2FnZSAodXNlIHt1c2VyfSB0byBtZW50aW9uIHRoZSB1c2VyKScsXG4gICAgICAgICAgdHlwZTogQXBwbGljYXRpb25Db21tYW5kT3B0aW9uVHlwZS5TdHJpbmcsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3N1Z2dlc3Rpb25zJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnc2V0IHRoZSBzdWdnZXN0aW9ucyBjaGFubmVsJyxcbiAgICAgIHR5cGU6IEFwcGxpY2F0aW9uQ29tbWFuZE9wdGlvblR5cGUuU3ViY29tbWFuZCxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdjaGFubmVsJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ3NldCB0aGUgc3VnZ2VzdGlvbnMgY2hhbm5lbCcsXG4gICAgICAgICAgdHlwZTogQXBwbGljYXRpb25Db21tYW5kT3B0aW9uVHlwZS5DaGFubmVsLFxuICAgICAgICAgIGNoYW5uZWxfdHlwZXM6IFtDaGFubmVsVHlwZS5HdWlsZFRleHRdLFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1bih7IGludGVyYWN0aW9uLCBjbGllbnQsIGhhbmRsZXIgfTogU2xhc2hDb21tYW5kUHJvcHMpIHtcbiAgYXdhaXQgaW50ZXJhY3Rpb24uZGVmZXJSZXBseSh7IGVwaGVtZXJhbDogdHJ1ZSB9KTtcblxuICBsZXQgc3ViY29tbWFuZCA9IGludGVyYWN0aW9uLm9wdGlvbnMuZ2V0U3ViY29tbWFuZCgpO1xuXG4gIHN3aXRjaCAoc3ViY29tbWFuZCkge1xuICAgIGNhc2UgJ3dlbGNvbWUnOlxuICAgICAgbGV0IGNoYW5uZWwgPSBpbnRlcmFjdGlvbi5vcHRpb25zLmdldENoYW5uZWwoJ2NoYW5uZWwnKSBhcyBUZXh0Q2hhbm5lbDtcbiAgICAgIGxldCBtZXNzYWdlID0gaW50ZXJhY3Rpb24ub3B0aW9ucy5nZXRTdHJpbmcoJ21lc3NhZ2UnKSB8fCAnJztcblxuICAgICAgbGV0IHdlbGNvbWVEYXRhID0gYXdhaXQgd2VsY29tZVNjaGVtYS5maW5kT25lKHsgZ3VpbGRJZDogaW50ZXJhY3Rpb24uZ3VpbGRJZCB9KTtcbiAgICAgIGlmICh3ZWxjb21lRGF0YSkge1xuICAgICAgICB3ZWxjb21lRGF0YS5jaGFubmVsSWQgPSBjaGFubmVsLmlkO1xuICAgICAgICB3ZWxjb21lRGF0YS5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgd2VsY29tZURhdGEuc2F2ZSgpO1xuXG4gICAgICAgIGxldCBlbWJlZCA9IG5ldyBFbWJlZEJ1aWxkZXIoKVxuICAgICAgICAgIC5zZXRUaXRsZSgnV2VsY29tZSBTeXN0ZW0nKVxuICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihgV2VsY29tZSBjaGFubmVsIHNldCB0byAke2NoYW5uZWx9IGFuZCB3ZWxjb21lIG1lc3NhZ2Ugc2V0IHRvIFxcYCR7bWVzc2FnZX1cXGBgKVxuICAgICAgICAgIC5zZXRDb2xvcigweDliNmRmZilcbiAgICAgICAgICAuc2V0VGltZXN0YW1wKCk7XG5cbiAgICAgICAgaW50ZXJhY3Rpb24uZWRpdFJlcGx5KHsgZW1iZWRzOiBbZW1iZWRdIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG5ld0RhdGEgPSBuZXcgd2VsY29tZVNjaGVtYSh7XG4gICAgICAgICAgY2hhbm5lbElkOiBjaGFubmVsLmlkLFxuICAgICAgICAgIGd1aWxkSWQ6IGludGVyYWN0aW9uLmd1aWxkSWQsXG4gICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgfSk7XG4gICAgICAgIG5ld0RhdGEuc2F2ZSgpO1xuXG4gICAgICAgIGxldCBlbWJlZCA9IG5ldyBFbWJlZEJ1aWxkZXIoKVxuICAgICAgICAgIC5zZXRUaXRsZSgnV2VsY29tZSBTeXN0ZW0nKVxuICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihgV2VsY29tZSBjaGFubmVsIHNldCB0byAke2NoYW5uZWx9IGFuZCB3ZWxjb21lIG1lc3NhZ2Ugc2V0IHRvIFxcYCR7bWVzc2FnZX1cXGBgKVxuICAgICAgICAgIC5zZXRDb2xvcigweDliNmRmZilcbiAgICAgICAgICAuc2V0VGltZXN0YW1wKCk7XG5cbiAgICAgICAgaW50ZXJhY3Rpb24uZWRpdFJlcGx5KHsgZW1iZWRzOiBbZW1iZWRdIH0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc3VnZ2VzdGlvbnMnOlxuICAgICAgbGV0IHN1Z2dlc3Rpb25DaGFubmVsID0gaW50ZXJhY3Rpb24ub3B0aW9ucy5nZXRDaGFubmVsKCdjaGFubmVsJykgYXMgVGV4dENoYW5uZWw7XG5cbiAgICAgIGxldCBzdWdnZXN0aW9uRGF0YSA9IGF3YWl0IHN1Z2dlc3Rpb25TY2hlbWEuZmluZE9uZSh7IGd1aWxkSWQ6IGludGVyYWN0aW9uLmd1aWxkSWQgfSk7XG5cbiAgICAgIGlmIChzdWdnZXN0aW9uRGF0YSkge1xuICAgICAgICBzdWdnZXN0aW9uRGF0YS5jaGFubmVsSWQgPSBzdWdnZXN0aW9uQ2hhbm5lbC5pZDtcbiAgICAgICAgc3VnZ2VzdGlvbkRhdGEuc2F2ZSgpO1xuXG4gICAgICAgIGxldCBlbWJlZCA9IG5ldyBFbWJlZEJ1aWxkZXIoKVxuICAgICAgICAgIC5zZXRUaXRsZSgnU3VnZ2VzdGlvbnMgU3lzdGVtJylcbiAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oYFN1Z2dlc3Rpb25zIGNoYW5uZWwgc2V0IHRvICR7c3VnZ2VzdGlvbkNoYW5uZWx9YClcbiAgICAgICAgICAuc2V0Q29sb3IoMHg5YjZkZmYpXG4gICAgICAgICAgLnNldFRpbWVzdGFtcCgpO1xuXG4gICAgICAgIGludGVyYWN0aW9uLmVkaXRSZXBseSh7IGVtYmVkczogW2VtYmVkXSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBuZXdEYXRhID0gbmV3IHN1Z2dlc3Rpb25TY2hlbWEoe1xuICAgICAgICAgIGNoYW5uZWxJZDogc3VnZ2VzdGlvbkNoYW5uZWwuaWQsXG4gICAgICAgICAgZ3VpbGRJZDogaW50ZXJhY3Rpb24uZ3VpbGRJZCxcbiAgICAgICAgfSk7XG4gICAgICAgIG5ld0RhdGEuc2F2ZSgpO1xuXG4gICAgICAgIGxldCBlbWJlZCA9IG5ldyBFbWJlZEJ1aWxkZXIoKVxuICAgICAgICAgIC5zZXRUaXRsZSgnU3VnZ2VzdGlvbnMgU3lzdGVtJylcbiAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oYFN1Z2dlc3Rpb25zIGNoYW5uZWwgc2V0IHRvICR7c3VnZ2VzdGlvbkNoYW5uZWx9YClcbiAgICAgICAgICAuc2V0Q29sb3IoMHg5YjZkZmYpXG4gICAgICAgICAgLnNldFRpbWVzdGFtcCgpO1xuXG4gICAgICAgIGludGVyYWN0aW9uLmVkaXRSZXBseSh7IGVtYmVkczogW2VtYmVkXSB9KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpbnRlcmFjdGlvbi5lZGl0UmVwbHkoeyBjb250ZW50OiBcIlRoYXQncyBub3QgYSB2YWxpZCBzdWJjb21tYW5kIVwiIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9wdGlvbnM6IENvbW1hbmRPcHRpb25zID0ge1xuICB1c2VyUGVybWlzc2lvbnM6ICdBZG1pbmlzdHJhdG9yJyxcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7QUFDQSxTQUFTLDhCQUE4QixhQUFhLG9CQUFpQztBQUk5RSxJQUFNLE9BQW9CO0FBQUEsRUFDL0IsTUFBTTtBQUFBLEVBQ04sYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsU0FBUztBQUFBLElBQ1A7QUFBQSxNQUNF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
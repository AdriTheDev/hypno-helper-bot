import "../../chunk-LJIZ45IO.mjs";
import {
  __name
} from "../../chunk-G5GHKT7C.mjs";

// src/commands/admin/say.ts
import { ApplicationCommandOptionType, ChannelType } from "discord.js";
var data = {
  name: "say",
  description: "says something as the bot",
  dm_permission: false,
  options: [
    {
      name: "message",
      description: "the message to say",
      type: ApplicationCommandOptionType.String,
      required: true
    },
    {
      name: "channel",
      description: "the channel to say it in (cannot be used with reply-id)",
      type: ApplicationCommandOptionType.Channel,
      channel_types: [ChannelType.GuildText],
      required: false
    },
    {
      name: "reply-id",
      description: "message to reply to (if any)",
      type: ApplicationCommandOptionType.String,
      required: false
    }
  ]
};
async function run({ interaction, client, handler }) {
  const message = interaction.options.getString("message");
  const channel = interaction.options.getChannel("channel");
  const replyId = interaction.options.getString("reply-id");
  if (!message)
    return interaction.reply({ content: "Please provide a message to say", ephemeral: true });
  if (message.length > 2e3)
    return interaction.reply({ content: "Message must be less than 2000 characters", ephemeral: true });
  if (!replyId) {
    if (!channel) {
      interaction.channel?.send({ content: message });
    } else {
      channel.send({ content: message });
    }
  } else {
    const replyMessage = await interaction.channel?.messages.fetch(replyId);
    if (!replyMessage)
      return interaction.reply({ content: "Could not find message to reply to", ephemeral: true });
    replyMessage.reply({ content: message });
  }
  await interaction.reply({ content: "Message sent", ephemeral: true });
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2FkbWluL3NheS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHR5cGUgeyBDb21tYW5kRGF0YSwgQ29tbWFuZE9wdGlvbnMsIFNsYXNoQ29tbWFuZFByb3BzIH0gZnJvbSAnY29tbWFuZGtpdCc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlLCBDaGFubmVsVHlwZSwgRW1iZWRCdWlsZGVyLCBHdWlsZFRleHRCYXNlZENoYW5uZWwgfSBmcm9tICdkaXNjb3JkLmpzJztcblxuZXhwb3J0IGNvbnN0IGRhdGE6IENvbW1hbmREYXRhID0ge1xuICBuYW1lOiAnc2F5JyxcbiAgZGVzY3JpcHRpb246ICdzYXlzIHNvbWV0aGluZyBhcyB0aGUgYm90JyxcbiAgZG1fcGVybWlzc2lvbjogZmFsc2UsXG4gIG9wdGlvbnM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnbWVzc2FnZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ3RoZSBtZXNzYWdlIHRvIHNheScsXG4gICAgICB0eXBlOiBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlLlN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2NoYW5uZWwnLFxuICAgICAgZGVzY3JpcHRpb246ICd0aGUgY2hhbm5lbCB0byBzYXkgaXQgaW4gKGNhbm5vdCBiZSB1c2VkIHdpdGggcmVwbHktaWQpJyxcbiAgICAgIHR5cGU6IEFwcGxpY2F0aW9uQ29tbWFuZE9wdGlvblR5cGUuQ2hhbm5lbCxcbiAgICAgIGNoYW5uZWxfdHlwZXM6IFtDaGFubmVsVHlwZS5HdWlsZFRleHRdLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3JlcGx5LWlkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnbWVzc2FnZSB0byByZXBseSB0byAoaWYgYW55KScsXG4gICAgICB0eXBlOiBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlLlN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1bih7IGludGVyYWN0aW9uLCBjbGllbnQsIGhhbmRsZXIgfTogU2xhc2hDb21tYW5kUHJvcHMpIHtcbiAgY29uc3QgbWVzc2FnZSA9IGludGVyYWN0aW9uLm9wdGlvbnMuZ2V0U3RyaW5nKCdtZXNzYWdlJyk7XG4gIGNvbnN0IGNoYW5uZWwgPSBpbnRlcmFjdGlvbi5vcHRpb25zLmdldENoYW5uZWwoJ2NoYW5uZWwnKSBhcyBHdWlsZFRleHRCYXNlZENoYW5uZWw7XG4gIGNvbnN0IHJlcGx5SWQgPSBpbnRlcmFjdGlvbi5vcHRpb25zLmdldFN0cmluZygncmVwbHktaWQnKTtcblxuICBpZiAoIW1lc3NhZ2UpIHJldHVybiBpbnRlcmFjdGlvbi5yZXBseSh7IGNvbnRlbnQ6ICdQbGVhc2UgcHJvdmlkZSBhIG1lc3NhZ2UgdG8gc2F5JywgZXBoZW1lcmFsOiB0cnVlIH0pO1xuICBpZiAobWVzc2FnZS5sZW5ndGggPiAyMDAwKSByZXR1cm4gaW50ZXJhY3Rpb24ucmVwbHkoeyBjb250ZW50OiAnTWVzc2FnZSBtdXN0IGJlIGxlc3MgdGhhbiAyMDAwIGNoYXJhY3RlcnMnLCBlcGhlbWVyYWw6IHRydWUgfSk7XG5cbiAgaWYgKCFyZXBseUlkKSB7XG4gICAgaWYgKCFjaGFubmVsKSB7XG4gICAgICBpbnRlcmFjdGlvbi5jaGFubmVsPy5zZW5kKHsgY29udGVudDogbWVzc2FnZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhbm5lbC5zZW5kKHsgY29udGVudDogbWVzc2FnZSB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcmVwbHlNZXNzYWdlID0gYXdhaXQgaW50ZXJhY3Rpb24uY2hhbm5lbD8ubWVzc2FnZXMuZmV0Y2gocmVwbHlJZCk7XG4gICAgaWYgKCFyZXBseU1lc3NhZ2UpIHJldHVybiBpbnRlcmFjdGlvbi5yZXBseSh7IGNvbnRlbnQ6ICdDb3VsZCBub3QgZmluZCBtZXNzYWdlIHRvIHJlcGx5IHRvJywgZXBoZW1lcmFsOiB0cnVlIH0pO1xuXG4gICAgcmVwbHlNZXNzYWdlLnJlcGx5KHsgY29udGVudDogbWVzc2FnZSB9KTtcbiAgfVxuXG4gIGF3YWl0IGludGVyYWN0aW9uLnJlcGx5KHsgY29udGVudDogJ01lc3NhZ2Ugc2VudCcsIGVwaGVtZXJhbDogdHJ1ZSB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IG9wdGlvbnM6IENvbW1hbmRPcHRpb25zID0ge1xuICB1c2VyUGVybWlzc2lvbnM6ICdBZG1pbmlzdHJhdG9yJyxcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7QUFDQSxTQUFTLDhCQUE4QixtQkFBd0Q7QUFFeEYsSUFBTSxPQUFvQjtBQUFBLEVBQy9CLE1BQU07QUFBQSxFQUNOLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFNBQVM7QUFBQSxJQUNQO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixNQUFNLDZCQUE2QjtBQUFBLE1BQ25DLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsTUFBTSw2QkFBNkI7QUFBQSxNQUNuQyxlQUFlLENBQUMsWUFBWSxTQUFTO0FBQUEsTUFDckMsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixNQUFNLDZCQUE2QjtBQUFBLE1BQ25DLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUNGO0FBRUEsZUFBc0IsSUFBSSxFQUFFLGFBQWEsUUFBUSxRQUFRLEdBQXNCO0FBQzdFLFFBQU0sVUFBVSxZQUFZLFFBQVEsVUFBVSxTQUFTO0FBQ3ZELFFBQU0sVUFBVSxZQUFZLFFBQVEsV0FBVyxTQUFTO0FBQ3hELFFBQU0sVUFBVSxZQUFZLFFBQVEsVUFBVSxVQUFVO0FBRXhELE1BQUksQ0FBQztBQUFTLFdBQU8sWUFBWSxNQUFNLEVBQUUsU0FBUyxtQ0FBbUMsV0FBVyxLQUFLLENBQUM7QUFDdEcsTUFBSSxRQUFRLFNBQVM7QUFBTSxXQUFPLFlBQVksTUFBTSxFQUFFLFNBQVMsNkNBQTZDLFdBQVcsS0FBSyxDQUFDO0FBRTdILE1BQUksQ0FBQyxTQUFTO0FBQ1osUUFBSSxDQUFDLFNBQVM7QUFDWixrQkFBWSxTQUFTLEtBQUssRUFBRSxTQUFTLFFBQVEsQ0FBQztBQUFBLElBQ2hELE9BQU87QUFDTCxjQUFRLEtBQUssRUFBRSxTQUFTLFFBQVEsQ0FBQztBQUFBLElBQ25DO0FBQUEsRUFDRixPQUFPO0FBQ0wsVUFBTSxlQUFlLE1BQU0sWUFBWSxTQUFTLFNBQVMsTUFBTSxPQUFPO0FBQ3RFLFFBQUksQ0FBQztBQUFjLGFBQU8sWUFBWSxNQUFNLEVBQUUsU0FBUyxzQ0FBc0MsV0FBVyxLQUFLLENBQUM7QUFFOUcsaUJBQWEsTUFBTSxFQUFFLFNBQVMsUUFBUSxDQUFDO0FBQUEsRUFDekM7QUFFQSxRQUFNLFlBQVksTUFBTSxFQUFFLFNBQVMsZ0JBQWdCLFdBQVcsS0FBSyxDQUFDO0FBQ3RFO0FBdEJzQjtBQXdCZixJQUFNLFVBQTBCO0FBQUEsRUFDckMsaUJBQWlCO0FBQ25COyIsCiAgIm5hbWVzIjogW10KfQo=
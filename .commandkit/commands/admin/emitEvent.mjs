import "../../chunk-LJIZ45IO.mjs";
import {
  __name
} from "../../chunk-G5GHKT7C.mjs";

// src/commands/admin/emitEvent.ts
import { ApplicationCommandOptionType } from "discord.js";
var data = {
  name: "emit",
  description: "emit an event on the bot",
  dm_permission: false,
  options: [
    {
      name: "event",
      description: "the event to emit",
      type: ApplicationCommandOptionType.String,
      required: true,
      choices: [
        {
          name: "guildMemberAdd",
          value: "guildMemberAdd"
        }
      ]
    }
  ]
};
async function run({ interaction, client, handler }) {
  const event = interaction.options.getString("event") || "";
  switch (event) {
    case "guildMemberAdd":
      const member = interaction.member;
      interaction.client.emit("guildMemberAdd", member);
      interaction.reply({ content: `Emitted event \`${event}\``, ephemeral: true });
      break;
    default:
      interaction.reply("Invalid event");
      break;
  }
}
__name(run, "run");
var options = {
  userPermissions: "Administrator",
  devOnly: false
};
export {
  data,
  options,
  run
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2FkbWluL2VtaXRFdmVudC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHR5cGUgeyBDb21tYW5kRGF0YSwgU2xhc2hDb21tYW5kUHJvcHMsIENvbW1hbmRPcHRpb25zIH0gZnJvbSAnY29tbWFuZGtpdCc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlLCBFbWJlZEJ1aWxkZXIsIEd1aWxkTWVtYmVyIH0gZnJvbSAnZGlzY29yZC5qcyc7XG5cbmV4cG9ydCBjb25zdCBkYXRhOiBDb21tYW5kRGF0YSA9IHtcbiAgbmFtZTogJ2VtaXQnLFxuICBkZXNjcmlwdGlvbjogJ2VtaXQgYW4gZXZlbnQgb24gdGhlIGJvdCcsXG4gIGRtX3Blcm1pc3Npb246IGZhbHNlLFxuICBvcHRpb25zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2V2ZW50JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAndGhlIGV2ZW50IHRvIGVtaXQnLFxuICAgICAgdHlwZTogQXBwbGljYXRpb25Db21tYW5kT3B0aW9uVHlwZS5TdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIGNob2ljZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdndWlsZE1lbWJlckFkZCcsXG4gICAgICAgICAgdmFsdWU6ICdndWlsZE1lbWJlckFkZCcsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuKHsgaW50ZXJhY3Rpb24sIGNsaWVudCwgaGFuZGxlciB9OiBTbGFzaENvbW1hbmRQcm9wcykge1xuICBjb25zdCBldmVudCA9IGludGVyYWN0aW9uLm9wdGlvbnMuZ2V0U3RyaW5nKCdldmVudCcpIHx8ICcnO1xuXG4gIHN3aXRjaCAoZXZlbnQpIHtcbiAgICBjYXNlICdndWlsZE1lbWJlckFkZCc6XG4gICAgICBjb25zdCBtZW1iZXIgPSBpbnRlcmFjdGlvbi5tZW1iZXIgYXMgR3VpbGRNZW1iZXI7XG4gICAgICBpbnRlcmFjdGlvbi5jbGllbnQuZW1pdCgnZ3VpbGRNZW1iZXJBZGQnLCBtZW1iZXIpO1xuXG4gICAgICBpbnRlcmFjdGlvbi5yZXBseSh7IGNvbnRlbnQ6IGBFbWl0dGVkIGV2ZW50IFxcYCR7ZXZlbnR9XFxgYCwgZXBoZW1lcmFsOiB0cnVlIH0pO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGludGVyYWN0aW9uLnJlcGx5KCdJbnZhbGlkIGV2ZW50Jyk7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb3B0aW9uczogQ29tbWFuZE9wdGlvbnMgPSB7XG4gIHVzZXJQZXJtaXNzaW9uczogJ0FkbWluaXN0cmF0b3InLFxuICBkZXZPbmx5OiBmYWxzZSxcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7QUFDQSxTQUFTLG9DQUErRDtBQUVqRSxJQUFNLE9BQW9CO0FBQUEsRUFDL0IsTUFBTTtBQUFBLEVBQ04sYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsU0FBUztBQUFBLElBQ1A7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLE1BQU0sNkJBQTZCO0FBQUEsTUFDbkMsVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxlQUFzQixJQUFJLEVBQUUsYUFBYSxRQUFRLFFBQVEsR0FBc0I7QUFDN0UsUUFBTSxRQUFRLFlBQVksUUFBUSxVQUFVLE9BQU8sS0FBSztBQUV4RCxVQUFRLE9BQU87QUFBQSxJQUNiLEtBQUs7QUFDSCxZQUFNLFNBQVMsWUFBWTtBQUMzQixrQkFBWSxPQUFPLEtBQUssa0JBQWtCLE1BQU07QUFFaEQsa0JBQVksTUFBTSxFQUFFLFNBQVMsbUJBQW1CLEtBQUssTUFBTSxXQUFXLEtBQUssQ0FBQztBQUM1RTtBQUFBLElBQ0Y7QUFDRSxrQkFBWSxNQUFNLGVBQWU7QUFDakM7QUFBQSxFQUNKO0FBQ0Y7QUFkc0I7QUFnQmYsSUFBTSxVQUEwQjtBQUFBLEVBQ3JDLGlCQUFpQjtBQUFBLEVBQ2pCLFNBQVM7QUFDWDsiLAogICJuYW1lcyI6IFtdCn0K
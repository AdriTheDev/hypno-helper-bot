import { ActivityType, type Client } from 'discord.js';
import type { CommandKit } from 'commandkit';

export default function (client: Client<true>, handler: CommandKit) {
  client.user.setPresence({
    status: 'idle',
    activities: [
      {
        name: 'with a pocket watch',
        type: ActivityType.Playing,
      },
    ],
  });
}

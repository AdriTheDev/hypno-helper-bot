import { Client, EmbedBuilder, GatewayIntentBits } from 'discord.js';
import { CommandKit } from 'commandkit';
import { config } from 'dotenv';
import path from 'path';

config();

const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
  ],
});

new CommandKit({
  client,
  commandsPath: path.join(__dirname, 'commands'),
  eventsPath: path.join(__dirname, 'events'),
  devGuildIds: ['1232708441366204547'],
  devUserIds: ['1193695042230026301'],
});

client.login(process.env.DISCORD_TOKEN);

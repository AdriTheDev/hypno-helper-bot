

;await (async()=>{
  'use strict';
// --- CommandKit require() polyfill ---
  if (typeof require === "undefined") {
    const { createRequire } = await import("node:module");
    const __require = createRequire(import.meta.url);
    Object.defineProperty(globalThis, "require", {
      value: (id) => {
        return __require(id);
      },
      configurable: true,
      enumerable: false,
      writable: true,
    });
  }
// --- CommandKit require() polyfill ---


})();



import {
  __dirname
} from "./chunk-LJIZ45IO.mjs";
import "./chunk-G5GHKT7C.mjs";

// src/index.ts
import { Client, GatewayIntentBits } from "discord.js";
import { CommandKit } from "commandkit";
import { config } from "dotenv";
import path from "path";
config();
var client = new Client({
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
    GatewayIntentBits.MessageContent
  ]
});
new CommandKit({
  client,
  commandsPath: path.join(__dirname, "commands"),
  eventsPath: path.join(__dirname, "events"),
  devGuildIds: ["1232708441366204547"],
  devUserIds: ["1193695042230026301"]
});
client.login(process.env.DISCORD_TOKEN);
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBDbGllbnQsIEVtYmVkQnVpbGRlciwgR2F0ZXdheUludGVudEJpdHMgfSBmcm9tICdkaXNjb3JkLmpzJztcbmltcG9ydCB7IENvbW1hbmRLaXQgfSBmcm9tICdjb21tYW5ka2l0JztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ2RvdGVudic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuY29uZmlnKCk7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnQoe1xuICBpbnRlbnRzOiBbXG4gICAgR2F0ZXdheUludGVudEJpdHMuRGlyZWN0TWVzc2FnZXMsXG4gICAgR2F0ZXdheUludGVudEJpdHMuR3VpbGRFbW9qaXNBbmRTdGlja2VycyxcbiAgICBHYXRld2F5SW50ZW50Qml0cy5HdWlsZEludml0ZXMsXG4gICAgR2F0ZXdheUludGVudEJpdHMuR3VpbGRNZW1iZXJzLFxuICAgIEdhdGV3YXlJbnRlbnRCaXRzLkd1aWxkTWVzc2FnZXMsXG4gICAgR2F0ZXdheUludGVudEJpdHMuR3VpbGRNb2RlcmF0aW9uLFxuICAgIEdhdGV3YXlJbnRlbnRCaXRzLkd1aWxkUHJlc2VuY2VzLFxuICAgIEdhdGV3YXlJbnRlbnRCaXRzLkd1aWxkVm9pY2VTdGF0ZXMsXG4gICAgR2F0ZXdheUludGVudEJpdHMuR3VpbGRXZWJob29rcyxcbiAgICBHYXRld2F5SW50ZW50Qml0cy5HdWlsZHMsXG4gICAgR2F0ZXdheUludGVudEJpdHMuTWVzc2FnZUNvbnRlbnQsXG4gIF0sXG59KTtcblxubmV3IENvbW1hbmRLaXQoe1xuICBjbGllbnQsXG4gIGNvbW1hbmRzUGF0aDogcGF0aC5qb2luKF9fZGlybmFtZSwgJ2NvbW1hbmRzJyksXG4gIGV2ZW50c1BhdGg6IHBhdGguam9pbihfX2Rpcm5hbWUsICdldmVudHMnKSxcbiAgZGV2R3VpbGRJZHM6IFsnMTIzMjcwODQ0MTM2NjIwNDU0NyddLFxuICBkZXZVc2VySWRzOiBbJzExOTM2OTUwNDIyMzAwMjYzMDEnXSxcbn0pO1xuXG5jbGllbnQubG9naW4ocHJvY2Vzcy5lbnYuRElTQ09SRF9UT0tFTik7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7QUFBQSxTQUFTLFFBQXNCLHlCQUF5QjtBQUN4RCxTQUFTLGtCQUFrQjtBQUMzQixTQUFTLGNBQWM7QUFDdkIsT0FBTyxVQUFVO0FBRWpCLE9BQU87QUFFUCxJQUFNLFNBQVMsSUFBSSxPQUFPO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ1Asa0JBQWtCO0FBQUEsSUFDbEIsa0JBQWtCO0FBQUEsSUFDbEIsa0JBQWtCO0FBQUEsSUFDbEIsa0JBQWtCO0FBQUEsSUFDbEIsa0JBQWtCO0FBQUEsSUFDbEIsa0JBQWtCO0FBQUEsSUFDbEIsa0JBQWtCO0FBQUEsSUFDbEIsa0JBQWtCO0FBQUEsSUFDbEIsa0JBQWtCO0FBQUEsSUFDbEIsa0JBQWtCO0FBQUEsSUFDbEIsa0JBQWtCO0FBQUEsRUFDcEI7QUFDRixDQUFDO0FBRUQsSUFBSSxXQUFXO0FBQUEsRUFDYjtBQUFBLEVBQ0EsY0FBYyxLQUFLLEtBQUssV0FBVyxVQUFVO0FBQUEsRUFDN0MsWUFBWSxLQUFLLEtBQUssV0FBVyxRQUFRO0FBQUEsRUFDekMsYUFBYSxDQUFDLHFCQUFxQjtBQUFBLEVBQ25DLFlBQVksQ0FBQyxxQkFBcUI7QUFDcEMsQ0FBQztBQUVELE9BQU8sTUFBTSxRQUFRLElBQUksYUFBYTsiLAogICJuYW1lcyI6IFtdCn0K
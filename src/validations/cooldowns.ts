import type { ValidationProps } from 'commandkit';
const cooldown = new Map();

export default async function ({ interaction, commandObj, handler }: ValidationProps) {
  if (!interaction.isChatInputCommand()) return;

  if (commandObj.options?.cooldown) {
    if (cooldown.has(`${interaction.user.id}-${commandObj.data.name}`)) {
      const cooldownData = cooldown.get(`${interaction.user.id}-${commandObj.data.name}`);
      const timeLeft = cooldownData.expiresAt.getTime() - Date.now();

      if (timeLeft > 0) {
        interaction.reply({
          content: `You must wait **${Math.round(timeLeft / 1000)}** second(s) before using this command again!`,
          ephemeral: true,
        });
        return true;
      } else {
        cooldown.delete(`${interaction.user.id}-${commandObj.data.name}`);
      }
    } else {
      cooldown.set(`${interaction.user.id}-${commandObj.data.name}`, {
        expiresAt: new Date(Date.now() + commandObj.options.cooldown * 1000),
      });
    }
  }
}

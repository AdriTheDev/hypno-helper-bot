import { CommandData, SlashCommandProps, CommandOptions } from 'commandkit';

export const data: CommandData = {
  name: 'flipcoin',
  description: 'Flip a coin!',
};

export async function run({ interaction, client, handler }: SlashCommandProps) {
  const coinMsg = await interaction.reply({ content: 'Flipping a coin...', ephemeral: true });
  await new Promise((resolve) => setTimeout(resolve, 2 * 1000)); // 2 seconds
  const coin = Math.floor(Math.random() * 2) === 0 ? 'heads' : 'tails';
  await coinMsg.edit({ content: `You got **${coin}**!` });
}

export const options: CommandOptions = {
  cooldown: 10,
};

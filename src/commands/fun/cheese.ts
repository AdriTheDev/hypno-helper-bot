import { CommandData, SlashCommandProps, CommandOptions } from 'commandkit';
import { EmbedBuilder } from 'discord.js';

export const data: CommandData = {
  name: 'cheese',
  description: 'Cheese.',
};

export async function run({ interaction, client, handler }: SlashCommandProps) {
  await interaction.deferReply();

  try {
    const res = await fetch('https://meme-api.com/gimme/cheese');
    const json = await res.json();

    const cheeseEmbed = new EmbedBuilder()
      .setTitle(json.title)
      .setURL(json.postLink)
      .setImage(json.url)
      .setFooter({ text: `Upvotes: ${json.ups} | Author: ${json.author}` })
      .setColor(0x77dd77)
      .setTimestamp();

    await interaction.editReply({ embeds: [cheeseEmbed] });
  } catch (err) {
    console.error(err);
    await interaction.editReply({ content: 'Something went wrong!' });
  }
}

export const options: CommandOptions = {
  cooldown: 10,
};

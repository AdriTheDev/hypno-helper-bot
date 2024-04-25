import type { CommandData, CommandOptions, SlashCommandProps } from 'commandkit';
import { ApplicationCommandOptionType, ChannelType, EmbedBuilder, GuildTextBasedChannel } from 'discord.js';

export const data: CommandData = {
  name: 'eval',
  description: 'Evaluates the code provided',
  dm_permission: false,
  options: [
    {
      name: 'code',
      description: 'the code to run',
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: 'hide-reply',
      description: 'hide reply?',
      type: ApplicationCommandOptionType.Boolean,
      required: false,
    },
  ],
};

export async function run({ interaction, client, handler }: SlashCommandProps) {
  const code = interaction.options.getString('code');
  const hideReply = interaction.options.getBoolean('hide-reply');

  if (!code) return interaction.reply({ content: 'Please provide code to run', ephemeral: true });
  if (code.length > 2000) return interaction.reply({ content: 'Code must be less than 2000 characters', ephemeral: true });

  if (hideReply) {
    try {
      const evaled = await eval(code);
      const embed = new EmbedBuilder()
        .setTitle('Evaluated Code')
        .addFields(
          {
            name: 'Input',
            value: `\`\`\`js\n${code}\n\`\`\``,
          },
          {
            name: 'Output',
            value: `\`\`\`js\n${evaled}\n\`\`\``,
          }
        )
        .setColor(0x77dd77)
        .setTimestamp();

      interaction.reply({ embeds: [embed], ephemeral: true });
    } catch (e) {
      const embed = new EmbedBuilder()
        .setTitle('Evaluated Code')
        .addFields(
          {
            name: 'Input',
            value: `\`\`\`js\n${code}\n\`\`\``,
          },
          {
            name: 'Output',
            value: `\`\`\`js\n${e}\n\`\`\``,
          }
        )
        .setColor(0xff6961)
        .setTimestamp();

      interaction.reply({ embeds: [embed], ephemeral: true });
    }
  } else {
    try {
      const evaled = await eval(code);
      const embed = new EmbedBuilder()
        .setTitle('Evaluated Code')
        .addFields(
          {
            name: 'Input',
            value: `\`\`\`js\n${code}\n\`\`\``,
          },
          {
            name: 'Output',
            value: `\`\`\`js\n${evaled}\n\`\`\``,
          }
        )
        .setColor(0x77dd77)
        .setTimestamp();

      interaction.reply({ embeds: [embed] });
    } catch (e) {
      const embed = new EmbedBuilder()
        .setTitle('Evaluated Code')
        .addFields(
          {
            name: 'Input',
            value: `\`\`\`js\n${code}\n\`\`\``,
          },
          {
            name: 'Output',
            value: `\`\`\`js\n${e}\n\`\`\``,
          }
        )
        .setColor(0xff6961)
        .setTimestamp();

      interaction.reply({ embeds: [embed] });
    }
  }
}

export const options: CommandOptions = {
  userPermissions: 'Administrator',
};

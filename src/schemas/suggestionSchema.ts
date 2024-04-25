import { Schema, model } from 'mongoose';

const suggestionSchema = new Schema({
  guildId: {
    type: String,
    required: true,
  },
  channelId: {
    type: String,
    required: true,
  },
});

export default model('suggestion', suggestionSchema);

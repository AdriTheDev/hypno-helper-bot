import { Schema, model } from 'mongoose';

const welcomeSchema = new Schema({
  channelId: {
    type: String,
    required: true,
  },
  guildId: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export default model('welcome', welcomeSchema);

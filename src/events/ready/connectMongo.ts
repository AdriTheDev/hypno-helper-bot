import type { Client } from 'discord.js';
import type { CommandKit } from 'commandkit';
import { connect } from 'mongoose';

export default function (client: Client<true>, handler: CommandKit) {
  const { MONGODB_URI } = process.env;

  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI not found in .env file');
  }

  connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));
}

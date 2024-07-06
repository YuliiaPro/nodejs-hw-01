import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    const data = JSON.parse(contacts);
    return data.length;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());

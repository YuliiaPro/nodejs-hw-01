import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  return fs.readFile(PATH_DB, { encoding: 'utf8' });
};

console.log(await getAllContacts());

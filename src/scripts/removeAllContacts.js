import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, '[]', 'utf8');
    console.log('Success');
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();

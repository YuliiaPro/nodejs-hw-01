import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const user = createFakeContact();
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    contacts.push(user);
    try {
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
      console.log('Success');
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
    console.error(error);
  }
};

addOneContact();

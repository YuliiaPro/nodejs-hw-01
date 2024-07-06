import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { faker } from '@faker-js/faker';

const generateContacts = async (number) => {
  try {
    const users = faker.helpers.multiple(createFakeContact, {
      count: number,
    });
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    contacts.push(...users);
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

generateContacts(5);

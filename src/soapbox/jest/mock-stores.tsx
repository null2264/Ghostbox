import { fromJS } from 'immutable';

import alexJson from 'soapbox/__fixtures__/pleroma-account.json';
import { instanceSchema } from 'soapbox/schemas';

import { buildAccount } from './factory';

/** Store with registrations open. */
const storeOpen = { instance: instanceSchema.parse({ registrations: true }) };

/** Store with registrations closed. */
const storeClosed = { instance: instanceSchema.parse({ registrations: false }) };

/** Store with registrations closed, and Pepe enabled & open. */
const storePepeOpen = {
  instance: instanceSchema.parse({ registrations: false }),
  soapbox: fromJS({ extensions: { pepe: { enabled: true } } }),
  verification: { instance: fromJS({ registrations: true }) },
};

/** Store with registrations closed, and Pepe enabled & closed. */
const storePepeClosed = {
  instance: instanceSchema.parse({ registrations: false }),
  soapbox: fromJS({ extensions: { pepe: { enabled: true } } }),
  verification: { instance: fromJS({ registrations: false }) },
};

/** Store with a logged-in user. */
const storeLoggedIn = {
  me: alexJson.id,
  accounts: {
    [alexJson.id]: buildAccount(alexJson as any),
  },
};

export {
  storeOpen,
  storeClosed,
  storePepeOpen,
  storePepeClosed,
  storeLoggedIn,
};
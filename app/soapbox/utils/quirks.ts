/* eslint sort-keys: "error" */
import { createSelector } from 'reselect';

import { parseVersion, PLEROMA, MITRA, AKKOMA, any } from './features';

import type { Instance } from 'soapbox/schemas';
import type { RootState } from 'soapbox/store';

/** For solving bugs between API implementations. */
export const getQuirks = createSelector([
  (instance: Instance) => parseVersion(instance.version),
], (v) => {
  return {
    /**
     * The `next` and `prev` Link headers are backwards for blocks and mutes.
     * @see GET /api/v1/blocks
     * @see GET /api/v1/mutes
     */
    invertedPagination: any([
      v.software === PLEROMA,
      v.software === AKKOMA,
    ]),

    /**
     * Apps are not supported by the API, and should not be created during login or registration.
     * @see POST /api/v1/apps
     * @see POST /oauth/token
     */
    noApps: v.software === MITRA,

    /**
     * There is no OAuth form available for login.
     * @see GET /oauth/authorize
     */
    noOAuthForm: v.software === MITRA,
  };
});

/** Shortcut for inverted pagination quirk. */
export const getNextLinkName = (getState: () => RootState) =>
  getQuirks(getState().instance).invertedPagination ? 'prev' : 'next';

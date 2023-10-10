/* eslint sort-keys: "error" */
import { createSelector } from 'reselect';
import gte from 'semver/functions/gte';

import { parseVersion, PLEROMA, MITRA, AKKOMA, any, SPIRIT } from './features';

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
     * Akkoma's MRFs are now list of tuples instead of list of string.
     * Not entirely sure when this was added, from the changelog, it seems to be around 3.1.0.
     * @see GET /api/v1/pleroma/admin/config
     * @see POST /api/v1/pleroma/admin/config
     */
    mrfWithReason: v.software === AKKOMA && (gte(v.compatVersion, '3.1.0') || v.build === SPIRIT),

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

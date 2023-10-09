import { Map as ImmutableMap, Set as ImmutableSet } from 'immutable';

import ConfigDB from 'soapbox/utils/config-db';

import { fetchConfig, updateConfig } from './admin';

import type { MRFSimple } from 'soapbox/schemas/pleroma';
import type { AppDispatch, RootState } from 'soapbox/store';

const simplePolicyMerge = (simplePolicy: MRFSimple, host: string | boolean, restrictions: ImmutableMap<string, any>) => {
  const entries = Object.entries(simplePolicy).map(([key, value]) => {
    const isRestricted = restrictions.get(key);

    if (typeof value === 'boolean') {
      return [key, value];  // TODO
    }

    if (typeof host === 'boolean') {
      return [key, ImmutableSet(value).toJS()];
    }

    if (isRestricted) {
      return [key, ImmutableSet(value).add(host).toJS()];
    } else {
      return [key, ImmutableSet(value).delete(host).toJS()];
    }
  });

  return Object.fromEntries(entries);
};

const updateMrf = (host: string, restrictions: ImmutableMap<string, any>): any =>
  (dispatch: AppDispatch, getState: () => RootState) =>
    dispatch(fetchConfig())
      .then(() => {
        const configs = getState().admin.get('configs');
        const simplePolicy = ConfigDB.toSimplePolicy(configs);
        const merged = simplePolicyMerge(simplePolicy, host, restrictions);
        const config = ConfigDB.fromSimplePolicy(merged);
        return dispatch(updateConfig(config.toJS() as Array<Record<string, any>>));
      });

export { updateMrf };

import { Map as ImmutableMap, Set as ImmutableSet } from 'immutable';

import ConfigDB from 'soapbox/utils/config-db';

import { fetchConfig, updateConfig } from './admin';

import type { MRFSimple } from 'soapbox/schemas/pleroma';
import type { AppDispatch, RootState } from 'soapbox/store';

const simplePolicyMerge = (simplePolicy: MRFSimple, host: string, restrictions: ImmutableMap<string, any>) => {
  const entries = Object.entries(simplePolicy).map(([key, value]) => {
    const isRestricted = restrictions.get(key);

    if (typeof value === 'boolean') {
      return [key, value];  // TODO
    }

    if (isRestricted) {
      return [key, ImmutableSet(value).add([host, 'No reason']).toJS()];
    } else {
      const host_ = ImmutableSet(value).find(hosts => hosts[0] === host);
      if (!host_) return [key, value];
      return [key, ImmutableSet(value).delete(host_).toJS()];
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
        const config = ConfigDB.fromSimplePolicy(merged, getState);
        return dispatch(updateConfig(config.toJS() as Array<Record<string, any>>));
      });

export { updateMrf };

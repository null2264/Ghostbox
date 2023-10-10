import {
  Map as ImmutableMap,
  List as ImmutableList,
  Set as ImmutableSet,
  fromJS,
} from 'immutable';
import trimStart from 'lodash/trimStart';

import { mrfSimpleSchema, MRFSimple } from 'soapbox/schemas/pleroma';

import { isSuperset } from './collection';
import { getQuirks } from './quirks';

export type Config = ImmutableMap<string, any>;
export type Policy = ImmutableMap<string, ImmutableList<string | ImmutableList<string>> | boolean>;

const find = (
  configs: ImmutableList<Config> | Array<Config>,
  group: string,
  key: string,
): Config | undefined => {
  return configs.find(config =>
    isSuperset(config, ImmutableMap({ group, key })),
  );
};

const toSimplePolicy = (configs: ImmutableList<Config>): MRFSimple => {
  const config = find(configs, ':pleroma', ':mrf_simple');

  const reducer = (acc: ImmutableMap<string, any>, curr: ImmutableMap<string, any>) => {
    const key = curr.getIn(['tuple', 0]) as string;
    const maybeHosts = curr.getIn(['tuple', 1]) as ImmutableList<string | ImmutableMap<string, any>> | boolean;

    let value: ImmutableSet<ImmutableSet<string>> | boolean;
    if (typeof (maybeHosts) === 'boolean') {
      value = maybeHosts;
    } else {
      value = ImmutableSet(maybeHosts.map(host => {
        if (typeof host === 'string') return ImmutableSet([host, 'No reason']);
        return ImmutableSet(host.get('tuple'));
      }));
    }
    return acc.set(trimStart(key, ':'), value);
  };

  if (config?.get) {
    const value = config.get('value', ImmutableList());
    const result = value.reduce(reducer, ImmutableMap());
    return mrfSimpleSchema.parse(result.toJS());
  } else {
    return mrfSimpleSchema.parse({});
  }
};

const fromSimplePolicy = (simplePolicy: Policy, getState: () => any): ImmutableList<Config> => {
  const quirks = getQuirks(getState().instance);

  const value = Object.entries(simplePolicy).map(([key, value]: [string, any]) => {
    const rt = [`:${key}`, value];

    if (typeof value === 'boolean') return fromJS({ tuple: rt });

    if (quirks.mrfWithReason) {
      const rtValue: Array<string | ImmutableList<string>> = value.map((host: string | string[]) => {
        if (typeof host === 'string') return fromJS({ tuple: [ host, 'No reason'] });
        return fromJS({ tuple: [ host[0], host[1] ] });
      });

      rt[1] = rtValue;
    }
    return fromJS({ tuple: rt });
  });

  return ImmutableList([
    ImmutableMap({
      group: ':pleroma',
      key: ':mrf_simple',
      value,
    }),
  ]);
};

export const ConfigDB = {
  find,
  toSimplePolicy,
  fromSimplePolicy,
};

export default ConfigDB;

import {
  Map as ImmutableMap,
  List as ImmutableList,
  Set as ImmutableSet,
  fromJS,
} from 'immutable';
import trimStart from 'lodash/trimStart';

import { mrfSimpleSchema, MRFSimple } from 'soapbox/schemas/pleroma';

export type Config = ImmutableMap<string, any>;
export type Policy = ImmutableMap<string, ImmutableList<string> | boolean>;

const isSuperset = (record: Record<string, any>, subset: ImmutableMap<string, any>): boolean => {
  // FIXME: Workaround for isSuperset because Soapbox can't seem to decide if they gonna use ImmutableMap or not
  // Delete later when I find out how to make only use ImmutableMap
  if (record.isSuperset !== undefined)
    return record.isSuperset(subset);

  for (const key in subset) {
    if (!Object.prototype.hasOwnProperty.call(record, key) || record[key] !== subset.get(key)) {
      return false;
    }
  }
  return true;
};

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
    const maybeHosts = curr.getIn(['tuple', 1]) as ImmutableList<string> | boolean;

    let value: ImmutableSet<string> | boolean;
    if (typeof (maybeHosts) === 'boolean') {
      value = maybeHosts;
    } else {
      value = ImmutableSet(maybeHosts);
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

const fromSimplePolicy = (simplePolicy: Policy): ImmutableList<Config> => {
  const value = Object.entries(simplePolicy).map(([key, value]: [string, any]) => fromJS({ tuple: [`:${key}`, value] }));

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

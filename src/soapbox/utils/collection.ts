import {
  Map as ImmutableMap,
  List as ImmutableList,
} from 'immutable';

export const isSuperset = (record: Record<string, any>, subset: ImmutableMap<string, any>): boolean => {
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

export const tuple = <T, U>(left: T, right: U) => {
  return { tuple: [left, right] };
};

export const ImmutableTuple = <T, U>(left: T, right: U) => {
  return ImmutableMap({ tuple: ImmutableList([left, right]) });
};
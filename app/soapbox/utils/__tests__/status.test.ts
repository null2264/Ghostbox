
import { buildStatus } from 'soapbox/jest/factory';

import {
  hasIntegerMediaIds,
  defaultMediaVisibility,
} from '../status';

describe('hasIntegerMediaIds()', () => {
  it('returns true for a Pleroma deleted status', () => {
    const status = buildStatus(require('soapbox/__fixtures__/pleroma-status-deleted.json'));
    expect(hasIntegerMediaIds(status)).toBe(true);
  });
});

describe('defaultMediaVisibility()', () => {
  it('returns false with no status', () => {
    expect(defaultMediaVisibility(undefined, false)).toBe(false);
  });

  it('hides sensitive media by default', () => {
    const status = buildStatus({ sensitive: true });
    expect(defaultMediaVisibility(status, false)).toBe(false);
  });

  it('show media when showSensitiveMedia is true', () => {
    const status = buildStatus({});
    expect(defaultMediaVisibility(status, true)).toBe(true);
  });
});

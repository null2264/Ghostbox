import { Record as ImmutableRecord, fromJS } from 'immutable';

import { normalizeStatus } from '../status';

describe('normalizeStatus', () => {
  it('adds base fields', () => {
    const status = fromJS({});
    const result = normalizeStatus(status);

    expect(ImmutableRecord.isRecord(result)).toBe(true);
    expect(result.emojis).toEqual(fromJS([]));
    expect(result.favourites_count).toBe(0);
    expect(result.mentions).toEqual(fromJS([]));
    expect(result.reblog).toBe(null);
    expect(result.uri).toBe('');
    expect(result.visibility).toBe('public');
  });

  it('fixes the order of mentions', () => {
    const status = fromJS(require('soapbox/__fixtures__/status-unordered-mentions.json'));

    const expected = ['NEETzsche', 'alex', 'Lumeinshin', 'sneeden'];

    const result = normalizeStatus(status)
      .get('mentions')
      .map(mention => mention.get('username'))
      .toJS();

    expect(result).toEqual(expected);
  });

  it('adds mention to self in self-reply on Mastodon', () => {
    const status = fromJS(require('soapbox/__fixtures__/mastodon-reply-to-self.json'));

    const expected = fromJS([{
      id: '106801667066418367',
      username: 'benis911',
      acct: 'benis911',
      url: 'https://mastodon.social/@benis911',
    }]);

    const result = normalizeStatus(status).get('mentions');

    expect(result).toEqual(expected);
  });

  it('normalizes mentions with only acct', () => {
    const status = fromJS({ mentions: [{ acct: 'alex@gleasonator.com' }] });

    const expected = fromJS([{
      acct: 'alex@gleasonator.com',
      username: 'alex',
      url: '',
    }]);

    const result = normalizeStatus(status).get('mentions');

    expect(result).toEqual(expected);
  });

  it('normalizes Mitra attachments', () => {
    const status = fromJS(require('soapbox/__fixtures__/mitra-status-with-attachments.json'));

    const expected = fromJS([{
      id: '017eeb0e-e5df-30a4-77a7-a929145cb836',
      type: 'image',
      url: 'https://mitra.social/media/8e04e6091bbbac79641b5812508683ce72c38693661c18d16040553f2371e18d.png',
      preview_url: 'https://mitra.social/media/8e04e6091bbbac79641b5812508683ce72c38693661c18d16040553f2371e18d.png',
      remote_url: 'https://mitra.social/media/8e04e6091bbbac79641b5812508683ce72c38693661c18d16040553f2371e18d.png',
    }, {
      id: '017eeb0e-e5e4-2a48-2889-afdebf368a54',
      type: 'unknown',
      url: 'https://mitra.social/media/8f72dc2e98572eb4ba7c3a902bca5f69c448fc4391837e5f8f0d4556280440ac',
      preview_url: 'https://mitra.social/media/8f72dc2e98572eb4ba7c3a902bca5f69c448fc4391837e5f8f0d4556280440ac',
      remote_url: 'https://mitra.social/media/8f72dc2e98572eb4ba7c3a902bca5f69c448fc4391837e5f8f0d4556280440ac',
    }, {
      id: '017eeb0e-e5e5-79fd-6054-8b6869b1db49',
      type: 'unknown',
      url: 'https://mitra.social/media/55a81a090247cc4fc127e5716bcf7964f6e0df9b584f85f4696c0b994747a4d0.oga',
      preview_url: 'https://mitra.social/media/55a81a090247cc4fc127e5716bcf7964f6e0df9b584f85f4696c0b994747a4d0.oga',
      remote_url: 'https://mitra.social/media/55a81a090247cc4fc127e5716bcf7964f6e0df9b584f85f4696c0b994747a4d0.oga',
    }, {
      id: '017eeb0e-e5e6-c416-a444-21e560c47839',
      type: 'unknown',
      url: 'https://mitra.social/media/0d96a4ff68ad6d4b6f1f30f713b18d5184912ba8dd389f86aa7710db079abcb0',
      preview_url: 'https://mitra.social/media/0d96a4ff68ad6d4b6f1f30f713b18d5184912ba8dd389f86aa7710db079abcb0',
      remote_url: 'https://mitra.social/media/0d96a4ff68ad6d4b6f1f30f713b18d5184912ba8dd389f86aa7710db079abcb0',
    }]);

    const result = normalizeStatus(status);

    expect(result.media_attachments).toEqual(expected);
  });

  it('leaves Pleroma attachments alone', () => {
    const status = fromJS(require('soapbox/__fixtures__/pleroma-status-with-attachments.json'));
    const result = normalizeStatus(status);

    expect(status.get('media_attachments')).toEqual(result.media_attachments);
  });

  it('normalizes Pleroma quote post', () => {
    const status = fromJS(require('soapbox/__fixtures__/pleroma-quote-post.json'));
    const result = normalizeStatus(status);

    expect(result.quote).toEqual(status.getIn(['pleroma', 'quote']));
    expect(result.pleroma.get('quote')).toBe(undefined);
  });

  it('normalizes GoToSocial status', () => {
    const status = fromJS(require('soapbox/__fixtures__/gotosocial-status.json'));
    const result = normalizeStatus(status);

    // Adds missing fields
    const missing = {
      in_reply_to_account_id: null,
      in_reply_to_id: null,
      reblog: null,
      pinned: false,
      quote: null,
    };

    expect(result).toMatchObject(missing);
  });

  it('normalizes Friendica status', () => {
    const status = fromJS(require('soapbox/__fixtures__/friendica-status.json'));
    const result = normalizeStatus(status);

    // Adds missing fields
    const missing = {
      pinned: false,
      quote: null,
    };

    expect(result).toMatchObject(missing);
  });

  it('normalizes poll and poll options', () => {
    const status = fromJS({ poll: { options: [{ title: 'Apples' }] } });
    const result = normalizeStatus(status);

    const expected = {
      options: [{ title: 'Apples', votes_count: 0 }],
      emojis: [],
      expired: false,
      multiple: false,
      voters_count: 0,
      votes_count: 0,
      own_votes: [],
      voted: false,
    };

    expect(ImmutableRecord.isRecord(result.poll)).toBe(true);
    expect(ImmutableRecord.isRecord(result.poll.options.get(0))).toBe(true);
    expect(result.poll.toJS()).toMatchObject(expected);
    expect(result.poll.expires_at instanceof Date).toBe(true);
  });

  it('normalizes a Pleroma logged-out poll', () => {
    const status = fromJS(require('soapbox/__fixtures__/pleroma-status-with-poll.json'));
    const result = normalizeStatus(status);

    // Adds logged-in fields
    expect(result.poll.voted).toBe(false);
    expect(result.poll.own_votes).toEqual(fromJS([]));
  });
});
import { Map as ImmutableMap } from 'immutable';

import { __stub } from 'soapbox/api';
import { buildAccount, buildRelationship } from 'soapbox/jest/factory';
import { mockStore, rootState } from 'soapbox/jest/test-helpers';
import { ReducerRecord, EditRecord } from 'soapbox/reducers/account-notes';

import { changeAccountNoteComment, initAccountNoteModal, submitAccountNote } from '../account-notes';

describe('submitAccountNote()', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    const state = rootState
      .set('account_notes', ReducerRecord({ edit: EditRecord({ account: '1', comment: 'hello' }) }));
    store = mockStore(state);
  });

  describe('with a successful API request', () => {
    beforeEach(() => {
      __stub((mock) => {
        mock.onPost('/api/v1/accounts/1/note').reply(200, {});
      });
    });

    it('post the note to the API', async() => {
      const expectedActions = [
        { type: 'ACCOUNT_NOTE_SUBMIT_REQUEST' },
        { type: 'MODAL_CLOSE', modalType: undefined },
        { type: 'ACCOUNT_NOTE_SUBMIT_SUCCESS', relationship: {} },
      ];
      await store.dispatch(submitAccountNote());
      const actions = store.getActions();

      expect(actions).toEqual(expectedActions);
    });
  });

  describe('with an unsuccessful API request', () => {
    beforeEach(() => {
      __stub((mock) => {
        mock.onPost('/api/v1/accounts/1/note').networkError();
      });
    });

    it('should dispatch failed action', async() => {
      const expectedActions = [
        { type: 'ACCOUNT_NOTE_SUBMIT_REQUEST' },
        {
          type: 'ACCOUNT_NOTE_SUBMIT_FAIL',
          error: new Error('Network Error'),
        },
      ];
      await store.dispatch(submitAccountNote());
      const actions = store.getActions();

      expect(actions).toEqual(expectedActions);
    });
  });
});

describe('initAccountNoteModal()', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    const state = rootState
      .set('relationships', ImmutableMap({ '1': buildRelationship({ note: 'hello' }) }));
    store = mockStore(state);
  });

  it('dispatches the proper actions', async() => {
    const account = buildAccount({
      id: '1',
      acct: 'justin-username',
      display_name: 'Justin L',
      avatar: 'test.jpg',
      verified: true,
    });
    const expectedActions = [
      { type: 'ACCOUNT_NOTE_INIT_MODAL', account, comment: 'hello' },
      { type: 'MODAL_CLOSE', modalType: 'ACCOUNT_NOTE' },
      { type: 'MODAL_OPEN', modalType: 'ACCOUNT_NOTE' },
    ];
    await store.dispatch(initAccountNoteModal(account));
    const actions = store.getActions();

    expect(actions).toEqual(expectedActions);
  });
});

describe('changeAccountNoteComment()', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    const state = rootState;
    store = mockStore(state);
  });

  it('dispatches the proper actions', async() => {
    const comment = 'hello world';
    const expectedActions = [
      { type: 'ACCOUNT_NOTE_CHANGE_COMMENT', comment },
    ];
    await store.dispatch(changeAccountNoteComment(comment));
    const actions = store.getActions();

    expect(actions).toEqual(expectedActions);
  });
});

import { FETCH_REPO_START, FETCH_REPO_SUCCESS, FETCH_REPO_FAIL } from '../actionTypes';

import gitRepoReducers from '../reducers';

const initialState = {
  repo: null,
  errorMsg: '',
  loadingRepo: false
};

describe('git repository reducer', () => {
  it('should return the initial state', () => {
    const reducedState = gitRepoReducers(undefined, {});

    expect(reducedState).toEqual(initialState);
  });

  it('should handle FETCH_REPO_START action', () => {
    const reducedState = gitRepoReducers(undefined, { type: FETCH_REPO_START });
    const expectedState = {
      repo: null,
      errorMsg: '',
      loadingRepo: true
    };

    expect(reducedState).toEqual(expectedState);
  });

  it('should handle FETCH_REPO_SUCCESS action', () => {
    const repo = {};
    const expectedState = {
      repo: {},
      errorMsg: '',
      loadingRepo: false
    };

    const reducedState = gitRepoReducers(undefined, {
      type: FETCH_REPO_SUCCESS,
      payload: repo
    });

    expect(reducedState).toEqual(expectedState);
  });

  it('should handle FETCH_REPO_FAIL action', () => {
    const expectedState = {
      repo: null,
      errorMsg: 'error',
      loadingRepo: false
    };

    const reducedState = gitRepoReducers(undefined, {
      type: FETCH_REPO_FAIL,
      payload: 'error'
    });

    expect(reducedState).toEqual(expectedState);
  });
});

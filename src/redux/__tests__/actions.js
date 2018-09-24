import api from '../../utils/api';
import * as actionTypes from '../actionTypes';

import * as actions from '../actions';

const mockRepo = {};

describe('actions', () => {
  it('should create an action to store a repository', () => {
    const errorMsg = 'errorMsg';
    const expectedAction = {
      type: actionTypes.FETCH_REPO_SUCCESS,
      payload: mockRepo
    };

    expect(actions.fetchRepoSuccess(mockRepo)).toEqual(expectedAction);
  });

  it('should create an action to flag a repository is loading', () => {
    const expectedAction = {
      type: actionTypes.FETCH_REPO_START
    };

    expect(actions.fetchRepoStart()).toEqual(expectedAction);
  });

  it('should create an action to store an error', () => {
    const errorMsg = 'errorMsg';
    const expectedAction = {
      type: actionTypes.FETCH_REPO_FAIL,
      payload: errorMsg
    };

    expect(actions.fetchRepoFail(errorMsg)).toEqual(expectedAction);
  });

  describe('api fetch returns a `thunk` that accepts a dispatch function', () => {
    const dispatch = jest.fn();
    const fetchRepoAction = actions.fetchRepo('repoName');
    const loadingAction = { type: actionTypes.FETCH_REPO_START };

    describe('on success', () => {
      beforeEach(() => {
        jest.clearAllMocks();
        api.fetchRepo = jest.fn().mockImplementation(repoName => Promise.resolve(mockRepo));
        fetchRepoAction(dispatch);
      });

      it('should dispatch 2 actions', () => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });

      it('should trigger a loading action', () => {
        expect(dispatch).toHaveBeenCalledWith(loadingAction);
      });

      it('should trigger a fetch repo success action', () => {
        const storeAction = {
          type: actionTypes.FETCH_REPO_SUCCESS,
          payload: mockRepo
        };

        expect(dispatch).lastCalledWith(storeAction);
      });
    });

    describe('on fail', () => {
      beforeEach(() => {
        jest.clearAllMocks();
        api.fetchRepo = jest.fn().mockImplementation(repoName => Promise.reject(new Error('Server Error.')));
        fetchRepoAction(dispatch);
      });

      it('should dispatch 2 actions', () => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });

      it('should trigger a loading action', () => {
        expect(dispatch).toHaveBeenCalledWith(loadingAction);
      });

      it('should trigger a fetch repo fail action', () => {
        const storeAction = {
          type: actionTypes.FETCH_REPO_FAIL,
          payload: 'A Network Error Has Occurred'
        };

        expect(dispatch).lastCalledWith(storeAction);
      });
    });
  });
});

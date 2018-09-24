import { FETCH_REPO_START, FETCH_REPO_SUCCESS, FETCH_REPO_FAIL } from './actionTypes';

const initialState = {
  repo: null,
  errorMsg: '',
  loadingRepo: false
};

function gitRepoReducers(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_REPO_START:
      return Object.assign({}, state, {
        repo: null,
        errorMsg: '',
        loadingRepo: true
      });

    case FETCH_REPO_SUCCESS:
      return Object.assign({}, state, {
        repo: payload,
        errorMsg: '',
        loadingRepo: false
      });

    case FETCH_REPO_FAIL:
      return Object.assign({}, state, {
        repo: null,
        errorMsg: payload,
        loadingRepo: false
      });

    default:
      return state;
  }
}

export default gitRepoReducers;

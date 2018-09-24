import { FETCH_REPO_START, FETCH_REPO_SUCCESS, FETCH_REPO_FAIL } from './actionTypes';
import api from '../utils/api';

export const fetchRepo = repoName => dispatch => {
  dispatch(fetchRepoStart());
  api
    .fetchRepo(repoName)
    .then(repo => dispatch(fetchRepoSuccess(repo)))
    .catch(error => {
      const errorMsg =
        error.apiStatusCode === 404 ? `Repository "${repoName}" Does Not Exist` : 'A Network Error Has Occurred';
      dispatch(fetchRepoFail(errorMsg));
    });
};

export const fetchRepoStart = () => ({ type: FETCH_REPO_START });

export const fetchRepoSuccess = repo => ({
  type: FETCH_REPO_SUCCESS,
  payload: repo
});

export const fetchRepoFail = errorMsg => ({
  type: FETCH_REPO_FAIL,
  payload: errorMsg
});

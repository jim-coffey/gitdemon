import axios from 'axios';
import { ApiError } from './errors';

module.exports = {
  fetchRepo: repoName =>
    axios
      .get('https://api.github.com/repos/' + repoName)
      .then(response => response.data)
      .catch(error => {
        if (error.response) {
          throw new ApiError(error.response.status, error);
        }

        throw new Error(error);
      })
};

import React, { Component } from 'react';
import { shape, string, number, bool } from 'prop-types';
import RepoInput from './RepoInput';
import RepoInfo from './RepoInfo';
import ErrorMsg from './ErrorMsg';
import Loading from './Loading';

class GitDemon extends Component {
  handleSubmit = repoName => {
    const { fetchRepo } = this.props;

    fetchRepo(repoName);
  };

  render() {
    const { repo, errorMsg, loadingRepo } = this.props;

    return (
      <div className="container">
        <h1 className="centered">Git Repo Search</h1>
        <RepoInput label="Github Repository" onSubmit={this.handleSubmit} />
        {repo && (
          <RepoInfo
            repoName={repo.full_name}
            stars={repo.stargazers_count}
            watchers={repo.watchers_count}
            forks={repo.forks_count}
          />
        )}
        {errorMsg && <ErrorMsg errorMsg={errorMsg} />}
        {loadingRepo && <Loading text="Fetching Repository" />}
      </div>
    );
  }
}

GitDemon.propTypes = {
  repo: shape({
    full_name: string,
    stargazers_count: number,
    watchers_count: number,
    forks_count: number
  }),
  errorMsg: string,
  loadingRepo: bool
};

GitDemon.defaultProps = {
  repo: null,
  errorMsg: '',
  loadingRepo: false
};

export default GitDemon;

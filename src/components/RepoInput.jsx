import React from 'react';
import { string, func } from 'prop-types';

class RepoInput extends React.Component {
  state = {
    repoName: ''
  };

  handleChange = ({ target: { value: repoName } }) => {
    this.setState(function() {
      return {
        repoName
      };
    });
  };

  handleSubmit = event => {
    const { onSubmit } = this.props;
    const { repoName } = this.state;

    event.preventDefault();

    onSubmit(repoName);
  };

  render() {
    const { repoName } = this.state;

    return (
      <form className="column" onSubmit={this.handleSubmit}>
        <label className="header" htmlFor="repo-name">
          {this.props.label}
        </label>
        <input
          id="repo-name"
          placeholder="Github username/reponame"
          type="text"
          autoComplete="off"
          value={repoName}
          onChange={this.handleChange}
        />
        <button className={`button${repoName ? '' : ' disabled'}`} type="submit" disabled={!repoName}>
          Submit
        </button>
      </form>
    );
  }
}

RepoInput.propTypes = {
  label: string.isRequired,
  onSubmit: func.isRequired
};

export default RepoInput;

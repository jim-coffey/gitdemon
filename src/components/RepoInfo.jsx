import React from 'react';
import { string, number } from 'prop-types';

const RepoInfo = ({ repoName, stars, watchers, forks }) => {
  return (
    <section className="column">
      <h2>{repoName}</h2>
      <p>Stars : {stars}</p>
      <p>Watchers: {watchers}</p>
      <p>Forks: {forks}</p>
    </section>
  );
};

RepoInfo.propTypes = {
  repoName: string.isRequired,
  stars: number.isRequired,
  watchers: number.isRequired,
  forks: number.isRequired
};

module.exports = RepoInfo;

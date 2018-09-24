import React from 'react';
import { shallow } from 'enzyme';
import RepoInput from '../RepoInput';
import RepoInfo from '../RepoInfo';
import ErrorMsg from '../ErrorMsg';
import Loading from '../Loading';

import GitDemonUi from '../GitDemonUi';

describe('GitDemonUi', () => {
  const initialProps = {
    repo: null,
    errorMsg: '',
    loadingRepo: false
  };
  const testRepo = {
    full_name: 'Full Name',
    stargazers_count: 1,
    watchers_count: 2,
    forks_count: 3
  };

  describe('on initial entry', () => {
    const testProps = { ...initialProps };
    const testWrapper = shallow(<GitDemonUi {...testProps} />);

    it('displays an input form by default', () => {
      expect(testWrapper.find(RepoInput).length).toBeTruthy();
    });

    it('does not display any repository information', () => {
      expect(testWrapper.find(RepoInfo).length).toBeFalsy();
    });

    it('does not display any loading notification', () => {
      expect(testWrapper.find(Loading).length).toBeFalsy();
    });

    it('does not display any error notification', () => {
      expect(testWrapper.find(ErrorMsg).length).toBeFalsy();
    });
  });

  describe('while loading', () => {
    const testProps = {
      ...initialProps,
      loadingRepo: true
    };
    const testWrapper = shallow(<GitDemonUi {...testProps} />);

    it('does display loading notification', () => {
      expect(testWrapper.find(Loading).length).toBeTruthy();
    });

    it('does not display any error notification', () => {
      expect(testWrapper.find(ErrorMsg).length).toBeFalsy();
    });

    it('should not display repository info', () => {
      expect(testWrapper.find(RepoInfo).length).toBeFalsy();
    });
  });

  describe('with repository', () => {
    const testProps = {
      ...initialProps,
      repo: { ...testRepo }
    };
    const testWrapper = shallow(<GitDemonUi {...testProps} />);

    it('should display repository info', () => {
      expect(testWrapper.find(RepoInfo).length).toBeTruthy();
    });

    it('does not display any loading notification', () => {
      expect(testWrapper.find(Loading).length).toBeFalsy();
    });

    it('does not display any error notification', () => {
      expect(testWrapper.find(ErrorMsg).length).toBeFalsy();
    });
  });

  describe('with error message', () => {
    const testProps = {
      ...initialProps,
      errorMsg: 'erroneous'
    };
    const testWrapper = shallow(<GitDemonUi {...testProps} />);

    it('does display an error notification', () => {
      expect(testWrapper.find(ErrorMsg).length).toBeTruthy();
    });

    it('does not display any loading notification', () => {
      expect(testWrapper.find(Loading).length).toBeFalsy();
    });

    it('should not display repository info', () => {
      expect(testWrapper.find(RepoInfo).length).toBeFalsy();
    });
  });
});

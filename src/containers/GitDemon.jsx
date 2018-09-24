import { connect } from 'react-redux';
import { fetchRepo } from '../redux/actions';
import GitDemonUi from '../components/GitDemonUi';

const mapStateToProps = ({ repo, errorMsg, loadingRepo }) => {
  return {
    repo,
    errorMsg,
    loadingRepo
  };
};

export default connect(
  mapStateToProps,
  { fetchRepo }
)(GitDemonUi);

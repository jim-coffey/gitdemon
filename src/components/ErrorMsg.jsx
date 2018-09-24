import React from 'react';
import { string } from 'prop-types';

const ErrorMsg = ({ errorMsg }) => {
  return (
    <section className="column error">
      <div className="error">{errorMsg}</div>
    </section>
  );
};

ErrorMsg.propTypes = {
  errorMsg: string.isRequired
};

module.exports = ErrorMsg;

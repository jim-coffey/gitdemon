import React, { Component } from 'react';
import { string, number } from 'prop-types';

class Loading extends Component {
  state = {
    text: this.props.text
  };

  componentDidMount() {
    const { text, speed } = this.props;
    const stopper = text + '...';

    this.interval = window.setInterval(() => {
      if (this.state.text === stopper) {
        this.setState(function() {
          return {
            text
          };
        });
      } else {
        this.setState(function(prevState) {
          return {
            text: prevState.text + '.'
          };
        });
      }
    }, speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <div className="loader">
        <p>{this.state.text}</p>
        {this.props.children}
      </div>
    );
  }
}

Loading.propTypes = {
  text: string,
  speed: number
};

Loading.defaultProps = {
  text: 'Loading',
  speed: 200
};

module.exports = Loading;

import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

class Bookmark extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Bookmark', className)} {...props}>
        <h1>
          Bookmark
        </h1>
      </div>
    );
  }
}

export default Bookmark;

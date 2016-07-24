import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import style from './App.css';

class App extends Component {
  static propTypes = {
    children: PropTypes.element
  };

  render() {
    return (
      <div className={style.root}>
        <Helmet title="React Ad Generator" />
        {this.props.children}
      </div>
    );
  }
}

export default App;

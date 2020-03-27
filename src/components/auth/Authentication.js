import React, { Component } from 'react';
// import { Redirect, withRouter } from 'react-router-dom';
// import { getToken } from '../../utils/utils';

class Auth extends Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Auth;
'use strict';

import React from 'react';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // let _loginParams = this.props.location.search;
    // console.log(_loginParams);
    // console.log('this.props.history' ,this.props.history);
    // this.props.history.replaceState(null, '/home');
  }
  render() {
    return (<div>Da Login Page</div>);
  }

}

export default LoginPage;

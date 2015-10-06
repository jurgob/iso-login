'use strict';

import React from 'react';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    let _loginParams = this.props.location.search;
    console.log(_loginParams);
  }
  render() {
    return (<div>Da Login Page</div>);
  }

}

export default LoginPage;

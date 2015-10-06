'use strict';

import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    let _loginParams = this.props.location.search;
    console.log(_loginParams);
    
  }
  render() {
    return (<div>*** Da HomePage Page</div>);
  }

}

export default HomePage;

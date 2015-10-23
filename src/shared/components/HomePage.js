'use strict';

import React from 'react';
import {Container} from 'flux/utils';
import UserStore from '../stores/UserStore';
import SearchStore from '../stores/SearchStore';
import AppActions from '../AppActions';

class HomePage extends React.Component {
  static getStores() {
    return [UserStore];
  }

  static calculateState(prevState) {
    return {
      username: UserStore.getUsername(),
      curSearchUrl: SearchStore.getCurrentSearchUrl()
    };
  }

  // componentDidMount() {
  //   console.log('*** home componentDidMount');
  //   // let _loginParams = this.props.location.search;
  //   setTimeout(() => {
  //     this.doLogin();
  //   },2000);
  //
  // }

  doLogin() {
    console.log('doLogin()');
    AppActions.doLogin();
  }

  render() {
    return (
      <div>
        <h1>Da Home Page</h1>
        <div>
          test: {this.state.curSearchUrl}
        </div>
        <UserProps username={this.state.username} onClick={this.doLogin} />
      </div>
    );
  }
}

class UserProps extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>username: {this.props.username} - <div onClick={this.props.onClick} >refresh</div> </div>);
  }
}


const HomePageContainer = Container.create(HomePage);
export default HomePageContainer;

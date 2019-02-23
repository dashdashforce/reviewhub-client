import React, {Component} from 'react';
import ApolloClient from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';

import {Router, Redirect} from '@reach/router';

import './App.css';
import DashboardScene from './scenes/DashboardScene';
import LoginScene from './scenes/LoginScene';
import MainScrene from './scenes/MainScene';

import {getLink as getAuthLink} from './auth';

class App extends Component<any, any> {
  state = {
    isSignedIn: false,
  };

  client: any = null;

  handleOnLoginFailed(response: any) {
    console.log(response);
  }

  handleLogin = ({token}: {token: string}) => {
    localStorage.setItem('token', token);

    this.client = new ApolloClient({
      link: getAuthLink(token),
      cache: new InMemoryCache(),
    });

    this.setState({
      isSignedIn: true,
    });
  };

  render() {
    const {isSignedIn} = this.state;
    return (
      <div className="App">
        <Router>
          {!isSignedIn && <Redirect from="/" to="/login" noThrow />}
          <LoginScene path="/login" onLogin={this.handleLogin} />
          <MainScrene path="/" client={this.client}>
            <DashboardScene path="dashboard" />
            <Redirect from="" to="dashboard" noThrow />
          </MainScrene>
        </Router>
      </div>
    );
  }
}

export default App;

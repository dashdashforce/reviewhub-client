import React, {Component} from 'react';
import ApolloClient from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';

import {Router, Redirect, navigate} from '@reach/router';

import './App.css';
import DashboardScene from './scenes/DashboardScene';
import LoginScene from './scenes/LoginScene';
import MainScrene from './scenes/MainScene';

import {getLink as getAuthLink} from './auth';
import ApplicationLayout from './components/application-layout/ApplicationLayout';

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

    this.setState(
      {
        isSignedIn: true,
      },
      () => {
        navigate('/dashboard');
      },
    );
  };

  render() {
    return (
      <ApplicationLayout>
        <Router>
          <LoginScene path="/login" onLogin={this.handleLogin} />
          <MainScrene path="/" client={this.client}>
            <Redirect from="/" to="/dashboard" noThrow />
            <DashboardScene path="dashboard" />
          </MainScrene>
        </Router>
      </ApplicationLayout>
    );
  }
}

export default App;

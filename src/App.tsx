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
    isLoaded: false,
  };

  client: any = null;

  render() {
    const {isLoaded} = this.state;
    return (
      <ApplicationLayout>
        {isLoaded ? (
          <Router>
            <LoginScene
              path="/login"
              isAuthorized={this.client}
              onLogin={this.handleLogin}
            />
            <MainScrene path="/" client={this.client}>
              <Redirect from="/" to="/dashboard" noThrow />
              <DashboardScene path="dashboard" onLogout={this.handleLogout} />
            </MainScrene>
          </Router>
        ) : (
          'Loading...'
        )}
      </ApplicationLayout>
    );
  }

  componentDidMount() {
    const token = localStorage.getItem('token');

    if (!token) {
      this.loaded();
      return;
    }

    this.initApolloClient(token);
    this.loaded();
    navigate('/dashboard');
  }

  loaded() {
    this.setState({
      isLoaded: true,
    });
  }

  initApolloClient(token: string) {
    this.client = new ApolloClient({
      link: getAuthLink(token),
      cache: new InMemoryCache(),
    });
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    this.client = null;
    navigate('/login');
  };

  handleOnLoginFailed = (response: any) => {
    console.log(response);
  };

  handleLogin = ({token}: {token: string}) => {
    localStorage.setItem('token', token);
    this.initApolloClient(token);
    this.forceUpdate();
    navigate('/dashboard');
  };
}

export default App;

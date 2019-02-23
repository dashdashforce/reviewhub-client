import React, { Component } from 'react';
import axios from 'axios';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';

import GitHubLogin from './components/github-login';
import Home from './components/home';
import {token, isAuth, API_URL, getLink} from './auth';
import './App.css';

const GITHUB_CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID
const GITHUB_REDIRECT_URI = process.env.REACT_APP_GITHUB_REDIRECT_URI


interface GithubResponse {
  code: string;
}

class App extends Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      isSignedIn: isAuth,
      authToken: token,
    };
  }

  handleOnLoginSuccess(response: GithubResponse) {
    console.log(response);
    axios.post(`${API_URL}/auth`, response)
      .then((response: any) => {
        localStorage.setItem('token', response.data.token)
        this.setState({
          isSignedIn: !(response.data.token === null),
          token: response.data.token
        });
      });
  }

  handleOnLoginFailed(response: any) {
    console.log(response);
  }

  render() {
    return (
      <div className="App">
      {
        !this.state.isSignedIn
          ? 
          <ApolloProvider client={new ApolloClient({
            link: getLink(this.state.token),
            cache: new InMemoryCache()
          })}>
          <Home />
        </ApolloProvider>
          :
        <GitHubLogin
          clientId={GITHUB_CLIENT_ID}
          onSuccess={this.handleOnLoginSuccess.bind(this)}
          onFailure={this.handleOnLoginSuccess.bind(this)}
          redirectUri={GITHUB_REDIRECT_URI}
          scope="repo"
        />
      }
      </div>
    );
  }
}

export default App;

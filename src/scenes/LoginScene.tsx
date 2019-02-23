import * as React from 'react';
import axios from 'axios';

import GitHubLogin from '../components/github-login';
import {RouteComponentProps} from '@reach/router';

import {token, isAuth, API_URL, getLink as getAuthLink} from '../auth';

const GITHUB_CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
const GITHUB_REDIRECT_URI = process.env.REACT_APP_GITHUB_REDIRECT_URI;

interface GithubResponse {
  code: string;
}

export interface LoginSceneProps {}

export interface LoginSceneProps extends RouteComponentProps {
  onLogin: (data: {token: string}) => void;
}

export interface LoginSceneState {}

class LoginScene extends React.Component<LoginSceneProps, LoginSceneState> {
  render() {
    return (
      <GitHubLogin
        clientId={GITHUB_CLIENT_ID}
        onSuccess={this.handleLoginSuccess}
        onFailure={(error: any) => console.log('try one more time', error)}
        redirectUri={GITHUB_REDIRECT_URI}
        scope="repo"
      />
    );
  }

  handleLoginSuccess = (response: GithubResponse) => {
    const {onLogin} = this.props;
    axios.post(`${API_URL}/auth`, response).then((response) => {
      console.log(response);
      onLogin({token: response.data.token});
    });
  };
}

export default LoginScene;

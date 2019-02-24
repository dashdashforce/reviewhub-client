import * as React from 'react';
import axios from 'axios';

import GitHubLogin from '../components/github-login';
import {RouteComponentProps, Redirect} from '@reach/router';

import {token, isAuth, API_HOST, getLink as getAuthLink} from '../auth';

import styled from 'styled-components';
import ContentContainer from '../components/content-container/ContentContainer';

const GITHUB_CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
const GITHUB_REDIRECT_URI = process.env.REACT_APP_GITHUB_REDIRECT_URI;

const Grid = styled.div`
  padding: 40px;
`;

const Greeting = styled.h2`
  font-size: 24px;
`;

const ButtonHolder = styled.div`
  margin-top: 24px;
`;

interface GithubResponse {
  code: string;
}

export interface LoginSceneProps {
  isAuthorized: boolean;
}

export interface LoginSceneProps extends RouteComponentProps {
  onLogin: (data: {token: string}) => void;
}

export interface LoginSceneState {}

class LoginScene extends React.Component<LoginSceneProps, LoginSceneState> {
  render() {
    return (
      <ContentContainer>
        <Grid>
          <Greeting>Hello!</Greeting>
          <p>To use our service you must be authorized</p>
          <ButtonHolder>
            <GitHubLogin
              clientId={GITHUB_CLIENT_ID}
              onSuccess={this.handleLoginSuccess}
              onFailure={(error: any) =>
                console.log('try one more time', error)
              }
              redirectUri={GITHUB_REDIRECT_URI}
              scope="repo, user"
            />
          </ButtonHolder>
        </Grid>
      </ContentContainer>
    );
  }

  handleLoginSuccess = (response: GithubResponse) => {
    const {onLogin} = this.props;
    axios.post(`http://${API_HOST}/api/auth`, response).then((response) => {
      onLogin(response.data);
    });
  };
}

export default LoginScene;

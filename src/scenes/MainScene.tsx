import * as React from 'react';
import {ApolloProvider} from 'react-apollo';
import {RouteComponentProps, Redirect} from '@reach/router';

export interface MainScreneProps extends RouteComponentProps {
  client: any;
  children: React.ReactNode;
}

const MainScrene: React.SFC<MainScreneProps> = ({client, children}) => {
  if (!client) {
    return <Redirect to="/login" noThrow />;
  }
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default MainScrene;

import * as React from 'react';
import {ApolloProvider} from 'react-apollo';
import {RouteComponentProps} from '@reach/router';

export interface MainScreneProps extends RouteComponentProps {
  client: any;
  children: React.ReactNode;
}

const MainScrene: React.SFC<MainScreneProps> = ({client, children}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default MainScrene;

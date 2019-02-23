import * as React from 'react';
import Home from '../components/home';
import {RouteComponentProps} from '@reach/router';

export interface DashboardSceneProps extends RouteComponentProps {}

const DashboardScene: React.SFC<DashboardSceneProps> = () => {
  return <Home />;
};

export default DashboardScene;

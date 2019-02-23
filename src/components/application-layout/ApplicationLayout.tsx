import React from 'react';
import { Box, Grommet } from 'grommet';

const theme = {
    global: {
     colors: {
       brand: '#228BE6',
     },
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };

const Header = (props: any) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '1' }}
      {...props}
    />
);

export interface ApplicationLayoutProps {
    children: React.ReactNode;
 }
  
  const ApplicationLayout: React.SFC<ApplicationLayoutProps> = ({children}) => {
    return (
    <Grommet theme={theme}>
          <Header>Header</Header>
          {children}
    </Grommet>
    );
  };
  
  export default ApplicationLayout;
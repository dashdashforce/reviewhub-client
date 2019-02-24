import React from "react";
import { Grommet, Box } from "grommet";
import Header from "../header/Header";

const theme = {
  global: {
    colors: {
      brand: "#228BE6"
    }
  }
};

export interface ApplicationLayoutProps {
  children: React.ReactNode;
}

const ApplicationLayout: React.SFC<ApplicationLayoutProps> = ({ children }) => {
  return (
    <Grommet theme={theme}>
      <Header />
      {children}
    </Grommet>
  );
};

export default ApplicationLayout;

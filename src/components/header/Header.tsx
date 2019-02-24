import * as React from "react";
import ContentContainer from "../content-container/ContentContainer";
import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid #40514e;
  justify-content: space-between;
`;

const TeamTitle = styled.div`
  flex: 0 0 auto;
  font-size: 18px;
  line-height: 30px;
  font-weight: 700;
  color: #40514e;
  letter-spacing: 0.05em;
`;

const ProjectTitle = styled.h1`
  flex: 0 0 auto;
  letter-spacing: 0.05em;
  font-size: 18px;
  font-weight: 900;
`;

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  return (
    <ContentContainer>
      <Grid>
        <ProjectTitle>ReviewHub</ProjectTitle>
        <TeamTitle>--force</TeamTitle>
      </Grid>
    </ContentContainer>
  );
};

export default Header;

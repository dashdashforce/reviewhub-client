import * as React from 'react';
import styled from 'styled-components';

const Holder = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  ${({color}) => `background-color: ${color}`}
  margin-right: 4px;
`;

const Title = styled.div``;

export interface LanguageProps {
  title: string;
  color: string;
}

const Language: React.SFC<LanguageProps> = ({title, color}) => {
  return (
    <Holder>
      <Dot color={color} />
      <Title>{title}</Title>
    </Holder>
  );
};

export default Language;

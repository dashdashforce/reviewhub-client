import * as React from 'react';
import {Language as LanguageType} from '../../types';
import styled from 'styled-components';
import {Button} from 'grommet';
import Language from '../language/Language';

const Box = styled.div`
  border-radius: 8px;
  border: 1px solid #efefef;
  padding: 16px 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-right: 16px;
  flex: 1 1 auto;
`;

const ButtonHolder = styled.div`
  flex: 0 0 auto;
`;

const Description = styled.div`
  padding: 0 16px;
`;

const LanguageList = styled.div`
  margin: -8px;
  padding: 0 16px;
`;

const LanguageHolder = styled.div`
  margin: 8px;
  display: inline-block;
`;

export interface ReviewSuggestProps {
  id: string;
  title: string;
  description: string;
  languages: LanguageType[];
}

const ReviewSuggest: React.SFC<ReviewSuggestProps> = ({
  title,
  description,
  languages,
}) => {
  return (
    <Box>
      <Header>
        <Title>{title}</Title>
        <ButtonHolder>
          <Button primary label="Make a review" />
        </ButtonHolder>
      </Header>
      <Description dangerouslySetInnerHTML={{__html: description}} />
      <LanguageList>
        {languages.map((language, index) => (
          <LanguageHolder key={index}>
            <Language color={language.color} title={language.name} />
          </LanguageHolder>
        ))}
      </LanguageList>
    </Box>
  );
};

export default ReviewSuggest;

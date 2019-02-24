import * as React from 'react';
import {User} from '../../types';
import styled from 'styled-components';
import {Button} from 'grommet';
import Language from '../language/Language';

const Layout = styled.div`
  display: flex;
  align-items: center;
`;

const PhotoCol = styled.div`
  flex: 0 0 auto;
`;

const DataCol = styled.div`
  flex: 0 0 auto;
`;

const PhotoHolder = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  overflow: hidden;
  margin-right: 36px;
`;

const Photo = styled.img`
  width: 100%;
  vertical-align: middle;
`;

const Name = styled.div`
  font-size: 24px;
  margin-right: 24px;
`;

const Login = styled.div`
  font-size: 18px;
  margin-bottom: 8px;
`;

const NameRow = styled.div`
  display: inline-flex;
  align-items: center;
`;

const LanguageList = styled.div`
  margin: -8px;
`;

const LanguageHolder = styled.div`
  margin: 8px;
  display: inline-block;
`;

export interface ProfileDataProps {
  user: User;

  onLogout: () => void;
}

const ProfileData: React.SFC<ProfileDataProps> = ({user, onLogout}) => {
  return (
    <Layout>
      <PhotoCol>
        <PhotoHolder>
          <Photo src={user.image_url} />
        </PhotoHolder>
      </PhotoCol>
      <DataCol>
        <NameRow>
          <Name>{user.name}</Name>
          <Button onClick={onLogout} label="Logout" />
        </NameRow>
        <Login>@{user.login}</Login>
        <LanguageList>
          {user.langs.map((language, index) => (
            <LanguageHolder key={index}>
              <Language color={language.color} title={language.name} />
            </LanguageHolder>
          ))}
        </LanguageList>
      </DataCol>
    </Layout>
  );
};

export default ProfileData;

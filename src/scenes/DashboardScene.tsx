import * as React from 'react';
import Home from '../components/home';
import {RouteComponentProps} from '@reach/router';
import styled from 'styled-components';
import ProfileData from '../components/profile-data/ProfileData';
import {User, REVIEW_STATUS} from '../types';
import ContentContainer from '../components/content-container/ContentContainer';
import SubmittedReviews from '../components/submitted-reviews/SubmittedReviews';
import ReviewPreview from '../components/review-preview/ReviewPreview';

const Layout = styled.div``;
const ProfileRow = styled.div`
  padding: 24px 0;
`;
const SectionTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #d7c6b5;
  margin-top: 40px;
  margin-bottom: 24px;
`;

export interface DashboardSceneProps extends RouteComponentProps {
  onLogout: () => void;
}

const testUser: User = {
  name: 'Nick Popov',
  login: 'nckcol',
  image_url: 'https://avatars2.githubusercontent.com/u/2184318?s=460&v=4',
  langs: [
    {color: '#2b7489', name: 'TypeScript'},
    {color: '#f1e05a', name: 'JavaScript'},
    {color: '#e34c26', name: 'HTML'},
    {color: '#701516', name: 'Ruby'},
    {color: '#5e5086', name: 'Haskell'},
    {color: '#b07219', name: 'Java'},
  ],
  reviews: [
    {
      id: '1',
      title: 'Documented Auth Example(s)',
      description: `
      <h2>Have a question?</h2>
<p>Hi there! <g-emoji class="g-emoji" alias="wave" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png"><img class="emoji" alt="wave" src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png" width="20" height="20"></g-emoji></p>
<p>I am currently implementing Reach Router for the first time (it's rad!) and was trying to find some examples of ways to implement authentication/private routes and couldn't really find anything. So, first, I wanted to ask: am I might totally be missing a cache of examples somewhere?</p>
<p>Assuming I did a decent job at searching and the answer is "no", I would love to contribute some examples to the docs and I wanted to know if that would be welcome/helpful.</p>
<p>Thanks!</p>
  `,
      langs: [
        {color: '#5e5086', name: 'Haskell'},
        {color: '#b07219', name: 'Java'},
      ],

      status: REVIEW_STATUS.DONE,
    },
  ],
  feed: [
    {
      id: '1',
      title: 'Documented Auth Example(s)',
      description: `
      <h2>Have a question?</h2>
<p>Hi there! <g-emoji class="g-emoji" alias="wave" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png"><img class="emoji" alt="wave" src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png" width="20" height="20"></g-emoji></p>
<p>I am currently implementing Reach Router for the first time (it's rad!) and was trying to find some examples of ways to implement authentication/private routes and couldn't really find anything. So, first, I wanted to ask: am I might totally be missing a cache of examples somewhere?</p>
<p>Assuming I did a decent job at searching and the answer is "no", I would love to contribute some examples to the docs and I wanted to know if that would be welcome/helpful.</p>
<p>Thanks!</p>
  `,
      langs: [
        {color: '#5e5086', name: 'Haskell'},
        {color: '#b07219', name: 'Java'},
      ],
    },
  ],
};

const DashboardScene: React.SFC<DashboardSceneProps> = ({onLogout}) => {
  return (
    <Layout>
      <ContentContainer>
        <ProfileRow>
          <ProfileData user={testUser} onLogout={onLogout} />
        </ProfileRow>
        <SectionTitle>Submitted code reviews</SectionTitle>

        {testUser.reviews &&
          testUser.reviews.map((review) => (
            <ReviewPreview title={review.title} status={review.status} />
          ))}

        <SectionTitle>Make code review right now!</SectionTitle>

        {testUser.feed && <SubmittedReviews reviews={testUser.feed} />}
        {/* <PullRequests /> */}
      </ContentContainer>
    </Layout>
  );
};

export default DashboardScene;

import { statistics, user } from 'data';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Layout } from './Layout/Layout';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statistics} />
    </Layout>
  );
};

import { friends, statistics, user } from 'data';
import { FriendList } from './FriendList/FriendList';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Layout } from './Layout/Layout';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
// import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      {/* <TransactionHistory transactions={transactions} />; */}
    </Layout>
  );
};

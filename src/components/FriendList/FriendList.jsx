import { FriendItem } from 'components/FriendItem/FriendItem';
import { FriendsItem, FriendsList, FriendsTitle } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <>
      <FriendsTitle>FriendsList</FriendsTitle>
      <FriendsList>
        {friends.map(friend => (
          <FriendsItem key={friend.id}>
            <FriendItem friend={friend} />
          </FriendsItem>
        ))}
      </FriendsList>
    </>
  );
};

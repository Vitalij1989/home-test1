import PropTypes from 'prop-types';
import { FriendsName, FriendStatus } from './FriendItem.styled';
export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <FriendStatus online={isOnline}>{isOnline}</FriendStatus>
      <img src={avatar} alt="User avatar" width="48" />
      <FriendsName>{name}</FriendsName>
    </>
  );
};
FriendItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

import styled from 'styled-components';

export const FriendStatus = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ online }) => (online ? 'limegreen' : 'orangered')};
`;
export const FriendsName = styled.p`
  font-size: 30px;
  text-align: center;
`;

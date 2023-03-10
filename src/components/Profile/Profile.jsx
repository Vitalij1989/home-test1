import PropTypes from 'prop-types';
import {
  Description,
  ProfileCard,
  ProfileImg,
  ProfileName,
  ProfileStatsItem,
  ProfileStatsLabel,
  ProfileStatsQuantity,
  ProfileText,
  Stats,
} from './Profile.styled';
export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <>
      <ProfileCard>
        <Description>
          <ProfileImg src={avatar} alt={username} />
          <ProfileName>{username}</ProfileName>
          <ProfileText>@{tag}</ProfileText>
          <ProfileText>{location}</ProfileText>
        </Description>

        <Stats>
          <ProfileStatsItem>
            <ProfileStatsLabel>Followers</ProfileStatsLabel>
            <ProfileStatsQuantity>{followers}</ProfileStatsQuantity>
          </ProfileStatsItem>
          <ProfileStatsItem>
            <ProfileStatsLabel>Views</ProfileStatsLabel>
            <ProfileStatsQuantity>{views}</ProfileStatsQuantity>
          </ProfileStatsItem>
          <ProfileStatsItem>
            <ProfileStatsLabel>StatsLikes</ProfileStatsLabel>
            <ProfileStatsQuantity>{likes}</ProfileStatsQuantity>
          </ProfileStatsItem>
        </Stats>
      </ProfileCard>
    </>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

import {
  Card,
  CardBody,
  CardPoster,
  UserImg,
  UserName,
  UserTag,
  UserLocation,
  StatisticsList,
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './Profile.styled';

export const Profile = ({
  data: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Card>
      <CardBody>
        <CardPoster>
          <UserImg src={avatar} alt={username} />
        </CardPoster>
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </CardBody>

      <StatisticsList>
        <StatisticBox>
          <StatisticText>Followers</StatisticText>
          <StatisticCounter>{followers}</StatisticCounter>
        </StatisticBox>
        <StatisticBox>
          <StatisticText>Views</StatisticText>
          <StatisticCounter>{views}</StatisticCounter>
        </StatisticBox>
        <StatisticBox>
          <StatisticText>Likes</StatisticText>
          <StatisticCounter>{likes}</StatisticCounter>
        </StatisticBox>
      </StatisticsList>
    </Card>
  );
};

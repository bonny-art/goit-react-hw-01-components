import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date,
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
        <CardHeader>
          <CardPoster src={avatar} alt={username} />
        </CardHeader>
        <CardTitle>{username}</CardTitle>
        <Tag>@{tag}</Tag>
        <CardText>{location}</CardText>
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

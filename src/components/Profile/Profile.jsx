import { ProfileItem } from 'components';

import {
  Card,
  CardBody,
  CardPoster,
  UserImg,
  UserName,
  UserTag,
  UserLocation,
  StatisticsList,
} from './Profile.styled';

export const Profile = ({
  data: { username, tag, location, avatar, stats },
}) => {
  const statsKeys = Object.keys(stats);

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
        {statsKeys.map(statsItem => (
          <ProfileItem
            key={statsItem}
            statsName={statsItem}
            statsNumber={stats[statsItem]}
          />
        ))}
      </StatisticsList>
    </Card>
  );
};

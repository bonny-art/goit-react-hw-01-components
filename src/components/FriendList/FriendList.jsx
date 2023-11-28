import { ForbesListItem } from 'components';
import { FriendsProfiles } from './FriendList.styled';

export const FriendList = ({ data }) => {
  return (
    <FriendsProfiles>
      {data.map(({ id, avatar, name, isOnline }) => (
        <ForbesListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </FriendsProfiles>
  );
};

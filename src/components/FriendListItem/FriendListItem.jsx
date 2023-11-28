import { Friend, OnlineStatus, Avatar, Name } from './FriendListItem.styled';

// import { theme } from 'styles/theme';

export const ForbesListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      <OnlineStatus isOnline={isOnline}></OnlineStatus>
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
    </Friend>
  );
};

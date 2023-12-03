import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './ProfileItem.styled';

export const ProfileItem = ({ statsName, statsNumber }) => {
  console.log('statsName :>> ', statsName);
  console.log('statsNumber :>> ', statsNumber);

  return (
    <StatisticBox>
      <StatisticText>{statsName}</StatisticText>
      <StatisticCounter>{statsNumber}</StatisticCounter>
    </StatisticBox>
  );
};

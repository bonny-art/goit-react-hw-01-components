import { StatisticItem } from 'components';
import {
  StatisticsSection,
  StatisticTitle,
  StatisticsList,
} from './Statistics.styled';

export const Statistics = ({ title, data }) => {
  return (
    <StatisticsSection>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {data.map(({ id, label, percentage }) => (
          <StatisticItem key={id} label={label} percentage={percentage} />
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

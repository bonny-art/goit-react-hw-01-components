import styled from '@emotion/styled';
import { getRandomHexColor } from 'helpers/getRandomColor';

export const StatisticBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};

  background: ${getRandomHexColor};
  border-radius: ${props => props.theme.spacing(2)};
  box-shadow: ${props => props.theme.shadows.small};

  width: calc(100% - ${props => props.theme.spacing(2)} * 2);

  padding: ${props => props.theme.spacing(5)} ${props => props.theme.spacing(5)};
`;

export const StatisticText = styled.span`
  margin-bottom: 0;
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(1)};
  border-radius: ${props => props.theme.spacing(2)};

  background: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.dark};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 300;
`;

export const StatisticCounter = styled.span`
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(1)};
  border-radius: ${props => props.theme.spacing(2)};

  background: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.spacing(4)};
  font-weight: 900;
  color: ${props => props.theme.colors.accent};
`;

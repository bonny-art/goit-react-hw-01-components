import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: ${props => props.theme.spacing(130)};
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;

  padding: ${props => props.theme.spacing(2)};

  box-shadow: ${props => props.theme.shadows.regular};
  border-radius: ${props => props.theme.spacing(4)};
  background: ${props => props.theme.colors.white};
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};

  padding: ${props => props.theme.spacing(15)};
  margin-bottom: ${props => props.theme.spacing(4)};
`;

export const CardPoster = styled.div`
  width: ${props => props.theme.spacing(60)};
  height: ${props => props.theme.spacing(60)};
  border-radius: 50%;
  overflow: hidden;
  padding-top: ${props => props.theme.spacing(6)};
  background-color: ${props => props.theme.colors.light};
  box-shadow: ${props => props.theme.shadows.small};

  margin-bottom: ${props => props.theme.spacing(6)};
`;

export const UserImg = styled.img`
  object-fit: cover;
`;

export const UserName = styled.p`
  font-size: ${props => props.theme.spacing(6)};
  text-transform: capitalize;

  margin-bottom: ${props => props.theme.spacing(6)};
`;

export const UserTag = styled.span`
  padding: ${props => props.theme.spacing(4)} ${props => props.theme.spacing(8)};
  border-radius: ${props => props.theme.spacing(6)};
  font-size: ${props => props.theme.spacing(4)};
  color: ${props => props.theme.colors.white};

  background: ${props => props.theme.colors.tagBackground};

  margin-bottom: ${props => props.theme.spacing(6)};
`;

export const UserLocation = styled.p`
  font-weight: 200;
  letter-spacing: ${props => props.theme.spacing(0.2)};

  margin-bottom: 0;
`;

/**
  |============================
  | Statistics
  |============================
*/

export const StatisticsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${props => props.theme.spacing(2)};
`;

export const StatisticBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};

  width: calc(100% - ${props => props.theme.spacing(2)} * 2);

  background: ${props => props.theme.colors.light};
  border-radius: ${props => props.theme.spacing(2)};
  box-shadow: ${props => props.theme.shadows.small};

  padding-top: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(10)};
  padding-bottom: ${props => props.theme.spacing(5)};
  padding-left: ${props => props.theme.spacing(10)};
`;

export const StatisticText = styled.span`
  margin-bottom: 0;

  color: ${props => props.theme.colors.dark};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 300;
`;

export const StatisticCounter = styled.span`
  font-size: ${props => props.theme.spacing(8)};
  font-weight: 900;
  color: ${props => props.theme.colors.accent};
`;

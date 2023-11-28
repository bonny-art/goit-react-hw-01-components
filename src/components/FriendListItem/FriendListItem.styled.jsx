import styled from '@emotion/styled';

export const Friend = styled.li`
  display: flex;
  gap: ${props => props.theme.spacing(6)};
  align-items: center;

  padding: ${props => props.theme.spacing(4)} ${props => props.theme.spacing(6)};
  overflow: hidden;
  border-radius: 10px;

  box-shadow: ${props => props.theme.shadows.medium};
  cursor: pointer;

  transition-property: transform, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};

  background-color: ${props => props.theme.colors.white};

  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.small};
  }
`;

export const OnlineStatus = styled.span`
  background-color: ${props =>
    props.isOnline ? props.theme.colors.isOnline : props.theme.colors.isOfline};

  width: ${props => props.theme.spacing(4)};
  height: ${props => props.theme.spacing(4)};

  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: ${props => props.theme.spacing(12)};
  padding: ${props => props.theme.spacing(0.5)};
  border-radius: 50%;

  box-shadow: ${props => props.theme.shadows.regular};
`;

export const Name = styled.p`
  color: ${props => props.theme.colors.gray};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.large};
  letter-spacing: ${props => props.theme.spacing(0.25)};

  margin-bottom: 0;
`;

export const Capital = styled.span`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(1)};

  color: ${props => props.theme.colors.accent};
  font-weight: 700;

  font-size: ${props => props.theme.spacing(6)};
`;

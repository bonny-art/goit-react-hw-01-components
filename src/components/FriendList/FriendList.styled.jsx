import styled from '@emotion/styled';

export const FriendsProfiles = styled.ul`
  width: ${props => props.theme.spacing(130)};
  margin-left: auto;
  margin-right: auto;

  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.spacing(3)};

  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(5)};

  display: grid;
  row-gap: ${props => props.theme.spacing(2)};
`;

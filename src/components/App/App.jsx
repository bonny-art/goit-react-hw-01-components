import {
  Section,
  Container,
  Heading,
  Profile,
  Statistics,
  FriendList,
} from 'components';

import userData from 'data/user.json';
import downloadData from 'data/data.json';
import friendList from 'data/friends.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <Profile data={userData} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Statistics data={downloadData} title="Upload Stats" />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <FriendList data={friendList} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        {/* <CryptoHistory items={transactions} /> */}
      </Container>
    </Section>
  );
};

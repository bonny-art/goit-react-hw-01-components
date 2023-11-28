import { Section, Container, Heading, Profile } from 'components';
import userData from 'data/user.json';

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
        {/* <Statistics statsData={statsData} /> */}

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        {/* <ForbesList forbesList={forbes} /> */}

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        {/* <CryptoHistory items={transactions} /> */}
      </Container>
    </Section>
  );
};

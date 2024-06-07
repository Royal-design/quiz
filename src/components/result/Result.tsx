import { Container, Heading, Text } from "@chakra-ui/react";

type PropsType = {
  result: { score: number };
  data: object[];
};
export const Result = ({ result, data }: PropsType) => {
  return (
    <Container backgroundColor="white" rounded={10} padding={10} boxShadow="md">
      <Heading as="h2" color="red" textAlign="center">
        Quiz Result
      </Heading>

      <Text color="red" fontSize="1.5rem">
        Score: {`${result.score}/${data.length}`}
      </Text>
    </Container>
  );
};

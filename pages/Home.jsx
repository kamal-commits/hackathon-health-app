import {
  Box,
  Center,
  Image,
  Input,
  Button,
  Text,
  Icon,
  Spacer,
  Container,
} from "native-base";
import { useState } from "react";
import image from "../images/image.svg";

export default function Home() {
  let [data, setData] = useState({
    name: "",
    email: "",
  });

  //? destructuring
  let { name, email } = data;

  const changeHandler = (name) => (e) => {
    let value = e;
    setData({ ...data, [name]: value });
  };

  console.log({ data });

  return (
    // <Container flex="">
    <Center>
      <Image
        mt="5"
        alt="Alternate Text"
        source={{
          uri: image,
        }}
        size="2xl"
        // height="100%"
        width="100%"
      />
      <Input
        mt="3"
        placeholder="Name"
        w="75%"
        maxWidth="300px"
        value={name}
        color="black"
        onChangeText={changeHandler("name")}
      />
      <Spacer />
      <Box width="75%">
        <Input
          mt="3"
          placeholder="Email"
          w="100%"
          maxWidth="300px"
          value={email}
          color="black"
          onChangeText={changeHandler("email")}
        />
      </Box>
      <Button mt="4" colorScheme="light">
        Login
      </Button>
    </Center>
    // </Container>
  );
}

import { Box, Center, Image, Input } from "native-base";

export default function Home() {
  return (
    <Center>
      <Image
        alt="Alternate Text"
        source={{
          uri: "https://wallpaperaccess.com/full/317501.jpg",
        }}
        size="xl"
      />
      <Input mx="3" placeholder="Input" w="75%" maxWidth="300px" />
      <Input mx="3" placeholder="Input" w="75%" maxWidth="300px" />
    </Center>
  );
}

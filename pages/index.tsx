import {
  Box,
  Button, ButtonGroup,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from 'next/link';

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400");

  return (
      <>
        <Box
            as="section"
            d="flex"
            alignItems="center"
            flexDir="column"
            textAlign="center"
            justifyContent={"center"}
            py="4"
            minH={"100vh"}
            w={"100%"}
        >
          <NextImage
              src="/assets/brand/cartoon.jpg"
              width={"350"}
              height={"350"}
              alt="ben siebert avatar"
              placeholder="blur"
              blurDataURL="L5I~of#i004mgjw]-4XA00?wL#xu"
              style={{ borderRadius: "50%" }}
              priority
          />
          <Box mt={"2rem"}>
            <Heading as="h1" fontSize="2xl" fontWeight="500" py="2">
              Hi, I&#39;m <Text color={color} as={"span"}>Ben Siebert</Text>&nbsp;
              <span role="img" aria-label="hand">
              👋
            </span>
            </Heading>
            <Heading fontSize={["3xl", "4xl"]} fontWeight="700">
              A <Text color={color} as={"span"}>fullstack</Text> developer, <Text color={color} as={"span"}>student</Text> and <Text color={color} as={"span"}>gamer</Text>
            </Heading>
            <Text py="4">
              A&nbsp;
              <Text as="span" fontWeight="600">
                fullstack web developer
              </Text>&nbsp;
              based in Germany, I specialize in UI/UX design, Responsive web
              design, and REST APIs.
            </Text>
            <ButtonGroup>
              <NextLink href={"/contact"}>
                <Button
                    colorScheme="telegram"
                    size="lg"
                    fontSize="20px"
                >
                  Get in touch
                </Button>
              </NextLink>
              <NextLink href={"/explore"}>
                <Button
                    colorScheme="orange"
                    size="lg"
                    fontSize="20px"
                >
                  My Work
                </Button>
              </NextLink>
            </ButtonGroup>
          </Box>
        </Box>
      </>
  );
};

export default Home;

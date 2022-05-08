/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import React, { ReactElement } from 'react';

export default function BlogCard(props: {
  title: string;
  subtitle: string;
  description: string | JSX.Element | ReactElement | ReactElement[] | null;
  firstButton: { text: string; href: string };
  tags: string[];
  date: string;
}) {
  return (
    <Center>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={['100%']}
        maxW="500px"
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('gray.300', 'gray.900')}
        boxShadow={'2xl'}
        marginInline={'2rem'}
        mt={'2rem'}
        mb={'2rem'}
        padding={4}
      >
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {props.title}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            {props.subtitle} / {dayjs(props.date).format('MMMM DD, YYYY')}
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
          >
            {props.description}
          </Text>
          <Stack
            width={'100%'}
            direction="row"
            padding={2}
            justifyContent="center"
            alignItems={'center'}
          >
            {props.tags.map((tag) => {
              return (
                <Badge
                  key={tag}
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    (
                      document.querySelector(
                        '#blog-search-field'
                      ) as HTMLInputElement
                    ).value = 'tag:' + tag;
                  }}
                >
                  {tag}
                </Badge>
              );
            })}
          </Stack>

          <Stack
            width={'100%'}
            direction={'row'}
            padding={2}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Button
              as="a"
              colorScheme="telegram"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: 'full', sm: 'auto' }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
              cursor="pointer"
              href={props.firstButton.href}
            >
              {props.firstButton.text}
              <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clipRule="evenodd"
                />
              </Icon>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}

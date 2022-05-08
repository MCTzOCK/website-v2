/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import Image from 'next/image';

import {
  CustomLink,
  UnorderedList,
  OrderedList,
  ListItem,
  InlineCode,
} from './md/common';
import CodeBlock from './md/CodeBlock';
import { Heading } from '@chakra-ui/react';

const MDXComponents = {
  h1: (props: any) => <Heading size="2xl" {...props}/>,
  h2: (props: any) => <Heading size="xl" colorScheme={"red"} {...props}/>,
  h3: (props: any) => <Heading size="md" {...props}/>,
  h4: (props: any) => <Heading size="lg" {...props}/>,
  h5: (props: any) => <Heading size="sm" {...props}/>,
  h6: (props: any) => <Heading size="sm" {...props}/>,

  code: CodeBlock,
  a: CustomLink,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  inlineCode: InlineCode,
  Image,
};

export default MDXComponents;

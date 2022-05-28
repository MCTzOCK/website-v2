
import { Link as ChakraLink, chakra, Code } from "@chakra-ui/react";
import NextLink from "next/link";

export const CustomLink = (props: any) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <ChakraLink {...props} color={"blue.300"} />
      </NextLink>
    );
  }

  return <ChakraLink isExternal {...props} color={"blue.300"} />;
};

export const UnorderedList = (props: any) => (
  <chakra.ul style={{ paddingLeft: "2.5rem", paddingTop: "0.5rem", fontSize: "1.3rem" }} {...props} />
);

export const OrderedList = (props: any) => (
  <chakra.ol style={{ paddingLeft: "2.5rem", paddingTop: "0.5rem", fontSize: "1.3rem" }} {...props} />
);

export const ListItem = (props: any) => (
  <chakra.li style={{ paddingBottom: "0.25rem", fontSize: "1.3rem" }} {...props} />
);

export const InlineCode = (props: any) => <Code {...props} />;
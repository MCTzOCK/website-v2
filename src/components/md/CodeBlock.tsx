import { Box, Button, useClipboard, useColorMode } from "@chakra-ui/react";
import Highlight, { defaultProps } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/palenight";

import styles from "./codeblock.module.css";

const CodeBlock = ({ children, className }: {children: any, className: any}) => {
  const { hasCopied, onCopy } = useClipboard(children);

  const language = className.replace(/language-/, "");

  return (
    <Box pos="relative" marginTop="0.5rem">
      <Button
        colorScheme="twitter"
        pos="absolute"
        right="2"
        top="2"
        size="sm"
        onClick={onCopy}
      >
        {hasCopied ? "Copied" : "Copy"}
      </Button>

      <Highlight
        {...defaultProps}
        theme={darkTheme}
        code={children}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} ${styles.wrapper}`}
            style={{ ...style }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                <span className={styles.lineNo}>{i + 1}</span>

                <span className={styles.lineContent}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
  );
};

export default CodeBlock;

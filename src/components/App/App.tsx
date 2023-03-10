import React, { useCallback, useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  createTreeFromArray,
  insertNode,
  TreeNode,
} from "../../types/TreeNode";
import {
  getRandomArray,
  getRandomRgbString,
  getRandomNodeValue,
} from "../../utils";
import { BinaryTree } from "../BinaryTree/BinaryTree";

type TTheme = {
  mainColor: string;
};

export const App = () => {
  const SPACE = " ";
  const [tree, setTree] = useState<TreeNode | null>(null);
  const [, setReload] = useState<boolean>(false);
  const [theme, setTheme] = useState<TTheme | null>({ mainColor: `255, 0, 0` });

  const handleSpacebarEvent = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === SPACE) {
        insertNode(tree, getRandomNodeValue());
        setReload((prev) => !prev);
      }
    },
    [tree]
  );

  useEffect(() => {
    setTree(createTreeFromArray(getRandomArray()));
    setTheme({
      mainColor: getRandomRgbString(),
    });
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleSpacebarEvent);

    return () => {
      document.removeEventListener("keydown", handleSpacebarEvent);
    };
  }, [handleSpacebarEvent]);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Tip>
          Push spacebar to add new node. <br />
          <Reload onClick={() => setTheme({ mainColor: getRandomRgbString() })}>
            Click her
          </Reload>{" "}
          or reload to get new theme.
        </Tip>
        {tree && <BinaryTree tree={tree} />}
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  min-width: max-content;
  min-height: 100vh;
  padding: 70px;

  background-color: rgba(${(props) => props.theme.mainColor}, 25%);

  text-align: center;
`;

const Tip = styled.span`
  display: inline-block;
  margin-bottom: 30px;

  font-family: Courier New, monospace;
  font-size: 32px;
  line-height: 40px;
`;

const Reload = styled.button`
  font-family: Courier New, monospace;
  font-size: 24px;
  line-height: 32px;

  background-color: rgba(${(props) => props.theme.mainColor}, 30%);
  border-color: rgb(${(props) => props.theme.mainColor});
`;

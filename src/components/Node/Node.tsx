import React from "react";
import styled from "styled-components";
import { TreeNode } from "../../types/TreeNode";

type TTreeNodeProps = {
  node: TreeNode;
  parent: TreeNode | null;
};

type TNodeItemStyle = {
  hasChildren: boolean;
  hasParent: boolean;
};

type TWrapperStyle = {
  hasBothChildren: boolean;
};

export const Node = ({ node, parent }: TTreeNodeProps) => {
  return (
    <Wrapper hasBothChildren={Boolean(node.left && node.right)}>
      <NodeItem
        hasParent={Boolean(parent)}
        hasChildren={Boolean(node.left || node.right)}
      >
        {node.val}
      </NodeItem>
      {
        <NodeChildren>
          {node.left && <Node node={node.left} parent={node} />}
          {node.right && <Node node={node.right} parent={node} />}
        </NodeChildren>
      }
    </Wrapper>
  );
};

const Wrapper = styled.div<TWrapperStyle>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  // Horizontal line
  &:before {
    content: "";
    position: absolute;
    top: -20px;
    width: 60%;
    height: 3px;

    background-color: rgb(${(props) => props.theme.mainColor});
  }

  &:first-child:before {
    left: calc((100% - 32px) / 2);
  }

  &:last-child:before {
    right: calc((100% + 28px) / 2);
  }

  &:only-child:before {
    display: none;
  }
`;

const NodeItem = styled.div<TNodeItemStyle>`
  position: relative;
  display: grid;
  place-items: center;
  min-width: 50px;
  height: 50px;
  margin-bottom: 30px;
  margin-right: 30px;

  font-size: 32px;

  border: rgb(${(props) => props.theme.mainColor}) 3px solid;
  border-radius: 50%;
  background-color: white;

  //Vertical line

  ${({ theme, hasParent, hasChildren }) =>
    (hasParent || hasChildren) &&
    `
    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        width: 3px;
        height: 20px;

        background-color: rgb(${theme.mainColor});
    }
`}

  ${({ hasParent, hasChildren }) => {
    if (hasParent && hasChildren) {
      return `&:before {height: 86px; top: -20px}`;
    } else if (hasParent) {
      return `&:before {top: -20px;}`;
    } else if (hasChildren) {
      return `&:before {bottom: -16px;}`;
    }
  }}
`;

const NodeChildren = styled.div`
  display: flex;
`;

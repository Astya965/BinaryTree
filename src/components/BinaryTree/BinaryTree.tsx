import React from "react";
import styled from "styled-components";
import { TreeNode } from "../../types/TreeNode";
import { Node } from "../Node/Node";

type TBinaryTreeProps = {
  tree: TreeNode;
};

export const BinaryTree = ({ tree }: TBinaryTreeProps) => {
  return (
    <TreeWrapper>
      <Node node={tree} parent={null} />
    </TreeWrapper>
  );
};

const TreeWrapper = styled.div`
  display: grid;
  place-items: center;
`;

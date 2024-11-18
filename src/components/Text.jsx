import { useNode } from '@craftjs/core';
import { useState } from 'react';
import styled from 'styled-components';

const TextDiv = styled.div`
  padding: 10px;
  margin: 5px 0;
  cursor: move;
  border: 1px solid transparent;
  &:hover {
    border: 1px dashed #000;
  }
`;

export const Text = ({ text, fontSize }) => {
  const { connectors: { connect, drag }, selected } = useNode((node) => ({
    selected: node.events.selected
  }));

  return (
    <TextDiv
      ref={ref => connect(drag(ref))}
      style={{ 
        fontSize: `${fontSize}px`,
        backgroundColor: selected ? '#e6f7ff' : 'transparent'
      }}
    >
      <p style={{ margin: 0 }}>{text}</p>
    </TextDiv>
  );
};

Text.craft = {
  props: {
    text: 'New text',
    fontSize: 16
  },
  rules: {
    canDrag: true,
    canDrop: false
  }
}; 
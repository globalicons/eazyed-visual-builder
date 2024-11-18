import { useNode } from '@craftjs/core';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  margin: 5px;
  padding: ${props => props.padding}px;
  background-color: ${props => props.background};
  border: 1px dashed #aaa;
  min-height: 100px;
`;

export const Container = ({ children, background, padding }) => {
  const { connectors: { connect, drag }, selected } = useNode((node) => ({
    selected: node.events.selected
  }));

  return (
    <ContainerDiv
      ref={ref => connect(drag(ref))}
      background={background}
      padding={padding}
      style={{ backgroundColor: selected ? '#f0f0f0' : background }}
    >
      {children}
    </ContainerDiv>
  );
};

Container.craft = {
  props: {
    background: '#ffffff',
    padding: 20
  },
  rules: {
    canDrag: true,
    canDrop: true,
    canMoveIn: true,
  }
}; 
import styled from 'styled-components';
import { Element, useEditor } from '@craftjs/core';
import { Text } from './Text';
import { Button } from './Button';
import { Container } from './Container';

const ToolboxDiv = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f3f3f3;
  border-bottom: 1px solid #ccc;
`;

const ToolboxItem = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: move;
  background-color: white;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <ToolboxDiv>
      <h3>Drag to add</h3>
      <ToolboxItem
        ref={ref => connectors.create(ref, 
          <Text text="New text" fontSize={16} />
        )}
      >
        Add Text
      </ToolboxItem>
      <ToolboxItem
        ref={ref => connectors.create(ref, 
          <Button text="New Button" size="small" />
        )}
      >
        Add Button
      </ToolboxItem>
      <ToolboxItem
        ref={ref => connectors.create(ref, 
          <Element canvas is={Container} padding={20} background="#ffffff">
            <Text text="Container" fontSize={14} />
          </Element>
        )}
      >
        Add Container
      </ToolboxItem>
    </ToolboxDiv>
  );
}; 
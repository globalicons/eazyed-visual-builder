// pages/index.js

import React from "react";
import { Editor, Frame, Element } from '@craftjs/core';
import styled from 'styled-components';
import { Text } from './components/Text';
import { Container } from './components/Container';
import { Button } from './components/Button';
import { Toolbox } from './components/Toolbox';

const AppWrapper = styled.div`
  margin: 0 auto;
  width: 800px;
  padding: 20px;
`;

const EditorCanvas = styled.div`
  position: relative;
  min-height: 400px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export default function App() {
  return (
    <AppWrapper>
      <Editor resolver={{ Text, Container, Button }}>
        <Toolbox />
        <EditorCanvas>
          <Frame>
            <Element 
              canvas
              is={Container}
              background="#ffffff"
              padding={20}
            >
            </Element>
          </Frame>
        </EditorCanvas>
      </Editor>
    </AppWrapper>
  );
}

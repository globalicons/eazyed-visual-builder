import { Layout, theme } from 'antd';
import styled from "styled-components";
import { Card, CardBottom, CardTop } from "./components/user/Card";
import { Toolbox } from "./components/Toolbox";
import { Editor, Frame, Element } from "@craftjs/core";
import { Button } from "./components/user/Button";
import { Text } from "./components/user/Text";
import { Container } from "./components/user/Container";
import { Image } from "./components/user/Image";
import { Topbar } from "./components/user/Topbar";


const { Sider, Content } = Layout;

export default function App() {
  const { token } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Editor resolver={{ Card, Button, Container, Text, CardTop, CardBottom, Image }}>
       
        <Sider
          width={300}
          style={{
            background: token.colorBgContainer,
            borderRight: `1px solid ${token.colorBorder}`,
            padding: token.padding,
          }}
        >
          <ToolboxWrapper>
            <Toolbox />
          </ToolboxWrapper>
        </Sider>

        <Content style={{ background: token.colorBgLayout, padding: token.padding }}>
          <EditorWrapper>
            <Topbar />
            <Frame>
              <Element 
                is={Container} 
                padding={16} 
                background={token.colorBgContainer} 
                canvas
              >
               
                
                
               
               
              </Element>
            </Frame>
          </EditorWrapper>
        </Content>
      </Editor>
    </Layout>
  );
}

const ToolboxWrapper = styled.div`
  height: 100%;
`;

const EditorWrapper = styled.div`
  height: 100%;
  border-radius: ${props => props.theme.borderRadius}px;
  background: white;
  padding: 24px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
`;

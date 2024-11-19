// components/user/Card.js
import { Text } from "./Text";
import { Button } from "./Button";
import { Container } from "./Container";
import { Element, useNode } from "@craftjs/core";
import { Card as AntCard } from 'antd';

export const CardTop = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

CardTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes) =>
      incomingNodes.every((incomingNode) => incomingNode.data.type === Text),
  },
};

export const CardBottom = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return <div ref={connect}>{children}</div>;
};

CardBottom.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes) =>
      incomingNodes.every((incomingNode) => incomingNode.data.type === Button),
  },
};

export const Card = ({ background, padding = 20 }) => {
  return (
    <AntCard style={{ background, padding }}>
      <Element id="text" is={CardTop} canvas>
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Element>
      <Element id="buttons" is={Container} canvas padding={12}>
        <Button size="small" type="primary">
          Learn more
        </Button>
        <Button size="small" type="default">
          Cancel
        </Button>
      </Element>
    </AntCard>
  );
};

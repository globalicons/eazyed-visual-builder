import React, { useState } from "react";
import { Switch, Row, Col, Button, notification, Modal, Input } from "antd";
import { useEditor } from "@craftjs/core";
import copy from "copy-to-clipboard";
import lz from "lzutf8";

export const Topbar = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const [modalOpen, setModalOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState();
  const [stateToLoad, setStateToLoad] = useState(null);

  return (
    <div
      style={{
        padding: "8px",
        margin: "24px 0 8px",
        backgroundColor: "#cbe8e7",
      }}
    >
      <Row align="middle">
        <Col flex="auto">
          <span style={{ marginRight: 8 }}>Enable</span>
          <Switch
            checked={enabled}
            onChange={(value) =>
              actions.setOptions((options) => (options.enabled = value))
            }
          />
        </Col>
        <Button
          className="copy-state-btn"
          size="small"
          type="default"
          onClick={() => {
            const json = query.serialize();
            copy(lz.encodeBase64(lz.compress(json)));
            notification.success({ message: "State copied to clipboard" });
          }}
        >
          Save Output
        </Button>
        <Button
          className="load-state-btn"
          size="small"
          type="default"
          onClick={() => setModalOpen(true)}
        >
          Preview
        </Button>
        <Modal
          title="Load state"
          open={modalOpen}
          onCancel={() => setModalOpen(false)}
          footer={[
            <Button key="cancel" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>,
            <Button
              key="load"
              type="primary"
              onClick={() => {
                setModalOpen(false);
                const json = lz.decompress(lz.decodeBase64(stateToLoad));
                actions.deserialize(json);
                notification.success({ message: "State loaded" });
              }}
            >
              Load
            </Button>
          ]}
        >
          <Input.TextArea
            placeholder='Paste the contents that was copied from the "Copy Current State" button'
            value={stateToLoad}
            onChange={(e) => setStateToLoad(e.target.value)}
            rows={4}
          />
        </Modal>
        {/* <Col>
          <Button
            size="small"
            type="default"
            onClick={() => {
              console.log(query.serialize());
            }}
          >
            Serialize JSON to console
          </Button>
        </Col> */}
      </Row>
    </div>
  );
};

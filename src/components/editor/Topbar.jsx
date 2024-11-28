import React, { useState } from "react";
import { Switch, Row, Col, Button, message } from "antd";
import { useEditor } from "../../context/EditorContext";


export const Topbar = () => {
  const { isEditMode, toggleEditMode, saveLayout } = useEditor();
  const [isLoadModalOpen, setIsLoadModalOpen] = useState(false);

  const handleSave = () => {
    saveLayout();
  };

  return (
    <>
      <div style={{ 
        padding: "8px", 
        margin: "24px 0 8px", 
        backgroundColor: "#cbe8e7"
      }}>
        <Row align="middle">
          <Col flex="auto">
            <span style={{ marginRight: 8 }}>Edit Mode</span>
            <Switch
              checked={isEditMode}
              onChange={toggleEditMode}
            />
          </Col>
          <Button 
            size="small" 
            type="default" 
            onClick={handleSave} 
            style={{ marginRight: 8 }}
          >
            Save Layout
          </Button>
          <Button 
            size="small" 
            type="default" 
            onClick={() => setIsLoadModalOpen(true)}
          >
            Load Layout
          </Button>
        </Row>
      </div>

      <LoadLayoutModal 
        open={isLoadModalOpen}
        onClose={() => setIsLoadModalOpen(false)}
      />
    </>
  );
};

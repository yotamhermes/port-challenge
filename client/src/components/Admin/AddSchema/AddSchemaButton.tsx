import { Button, Modal, Divider } from "antd";
import { useState } from "react";
import SchemaForm from "../SchemaForm/SchemaForm";

function AddSchemaButton({ ...otherProps }) {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} {...otherProps}>
        New Schema
      </Button>
      <Modal title="New Schema" open={open} onCancel={handleCancel}>
        <Divider />
        <SchemaForm />
      </Modal>
    </>
  );
}

export default AddSchemaButton;

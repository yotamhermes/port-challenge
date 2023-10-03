import { Button, Modal, Divider, Form } from "antd";
import { useState, useEffect } from "react";
import { addEventSchema } from "../../../services/eventSchemas";
import SchemaForm from "../SchemaForm/SchemaForm";
import { INewEventSchema } from "../../../types/types";

type Props = {
  onSubmit: () => void;
  className: string;
};

function AddSchemaButton({ onSubmit, ...otherProps }: Props) {
  const [open, setOpen] = useState(false);
  const [submittable, setSubmittable] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setOpen(true);
  };

  const name = Form.useWatch("name", form);
  const fields = Form.useWatch("fields", form);

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
  }, [name, fields, form]);

  const handleOk = () => {
    setConfirmLoading(true);
    const eventSchema: INewEventSchema = {
      name: name,
      fields: fields,
    };

    addEventSchema(eventSchema)
      .then(() => {
        setConfirmLoading(false);
        setOpen(false);
        form.resetFields();
      })
      .then(onSubmit);
  };

  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} {...otherProps}>
        New Schema
      </Button>
      <Modal
        title="New Schema"
        open={open}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        onOk={handleOk}
        okText="Add Schema"
        okButtonProps={{ htmlType: "submit", disabled: !submittable }}
      >
        <Divider />
        <SchemaForm form={form} />
      </Modal>
    </>
  );
}

export default AddSchemaButton;

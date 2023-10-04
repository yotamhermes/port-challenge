import { Button, Modal, Divider, Form, Tooltip } from "antd";
import { useState } from "react";
import EventForm from "../EventForm/EventForm";
import { PlusOutlined } from "@ant-design/icons";
import { IEventSchemaField } from "../../../types/types";

type Props = {
  fields: IEventSchemaField[];
  onAddTestEvent: (event: any) => Promise<any>;
};

function AddEventSchemaButton({ fields, onAddTestEvent }: Props) {
  const [open, setOpen] = useState(false);
  const [submittable, setSubmittable] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setOpen(true);
  };

  const handleChanged = async () => {
    try {
      await form.validateFields({ validateOnly: true });
      setSubmittable(true);
    } catch (errorInfo) {
      setSubmittable(false);
    }
  };

  const handleOk = () => {
    setConfirmLoading(true);
    const event = form.getFieldsValue();

    onAddTestEvent(event).then(() => {
      setConfirmLoading(false);
      setOpen(false);
      form.resetFields();
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
  };

  return (
    <>
      <Tooltip title="Add Test Event">
        <Button icon={<PlusOutlined />} onClick={showModal} />
      </Tooltip>
      <Modal
        title="New Test Event"
        open={open}
        onCancel={handleCancel}
        onOk={handleOk}
        okText="Add Test Event"
        confirmLoading={confirmLoading}
        okButtonProps={{ htmlType: "submit", disabled: !submittable }}
      >
        <Divider />
        <EventForm onChange={handleChanged} form={form} fields={fields} />
      </Modal>
    </>
  );
}

export default AddEventSchemaButton;

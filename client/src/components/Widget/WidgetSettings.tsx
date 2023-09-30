import { useEffect, useState } from "react";
import { Modal, Divider, Form } from "antd";
import WidgetFormContainer from "./WidgetForm/WidgetFormContainer";

type Props = {
  open: boolean;
  setOpen: any;
};

const WidgetSettings = ({ open, setOpen }: Props) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [submittable, setSubmittable] = useState(false);
  const [form] = Form.useForm();
  const title = Form.useWatch("title", form);
  const widgetType = Form.useWatch("widgetType", form);
  const eventSchema = Form.useWatch("eventSchema", form);
  const eventSchemaField = Form.useWatch("eventSchemaField", form);

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
  }, [title, widgetType, eventSchema, eventSchemaField, form]);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      form.resetFields();
    }, 2000);
  };

  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
  };

  return (
    <Modal
      title="Widget Settings"
      open={open}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      onOk={handleOk}
      okText="Add Widget"
      okButtonProps={{ htmlType: "submit", disabled: !submittable }}
    >
      <Divider />
      {open && <WidgetFormContainer form={form} />}
    </Modal>
  );
};

export default WidgetSettings;

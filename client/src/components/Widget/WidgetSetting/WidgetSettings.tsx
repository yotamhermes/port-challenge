import { useEffect, useState } from "react";
import { Modal, Divider, Form } from "antd";
import WidgetFormContainer from "../WidgetForm/WidgetFormContainer";
import { IWidget } from "../../../types/types";

type Props = {
  open: boolean;
  setOpen: any;
  onAddWidget: (widget: IWidget) => Promise<any>;
};

const WidgetSettings = ({ open, setOpen, onAddWidget }: Props) => {
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
    onAddWidget({
      schemaId: eventSchema,
      schemaField: eventSchemaField,
      title,
      type: widgetType,
      position: {
        x: 0,
        y: 0,
      },
    }).then(() => {
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

import { useEffect, useState } from "react";
import { Modal, Divider, Form } from "antd";
import WidgetForm from "./WidgetForm";

type Props = {
  open: boolean;
  setOpen: any;
};

const WidgetSettings = ({ open, setOpen }: Props) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [submittable, setSubmittable] = useState(false);
  const [form] = Form.useForm();
  const title = Form.useWatch("title", form);

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
  }, [title, form]);

  const handleOk = () => {
    form.resetFields();

    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
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
      {open && <WidgetForm form={form} />}
    </Modal>
  );
};

export default WidgetSettings;

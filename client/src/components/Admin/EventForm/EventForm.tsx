import { Input, Form, Switch, InputNumber } from "antd";
import type { FormInstance } from "antd/es/form";
import { IEventSchemaField } from "../../../types/types";

type Props = {
  form: FormInstance;
  fields: IEventSchemaField[];
  onChange: () => void;
};

const renderField = (field: IEventSchemaField, onChange: () => void) => {
  switch (field.fieldType) {
    case "string":
      return (
        <Form.Item<string>
          key={field.fieldName}
          label={field.fieldName}
          validateFirst
          rules={[{ required: true }]}
          name={field.fieldName}
        >
          <Input placeholder={field.fieldType} onChange={onChange}></Input>
        </Form.Item>
      );
    case "number":
      return (
        <Form.Item<number>
          key={field.fieldName}
          label={field.fieldName}
          rules={[{ required: true }]}
          name={field.fieldName}
        >
          <InputNumber
            placeholder={field.fieldType}
            onChange={onChange}
          ></InputNumber>
        </Form.Item>
      );
    case "boolean":
      return (
        <Form.Item
          key={field.fieldName}
          label={field.fieldName}
          rules={[{ required: true }]}
          name={field.fieldName}
          valuePropName="checked"
        >
          <Switch onChange={onChange}></Switch>
        </Form.Item>
      );
  }
};

const EventForm = ({ form, fields, onChange }: Props) => {
  // This create initial values for all boolean
  const initialValues = fields
    .filter((x) => x.fieldType === "boolean")
    .map((x) => x.fieldName)
    .reduce((acc: any, item) => {
      acc[item] = false;
      return acc;
    }, {});

  return (
    <Form
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 20 }}
      initialValues={initialValues}
    >
      {fields.map((x) => renderField(x, onChange))}
    </Form>
  );
};

export default EventForm;

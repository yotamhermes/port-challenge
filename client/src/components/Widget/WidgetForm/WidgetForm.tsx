import { Input, Form, Select } from "antd";
import type { FormInstance } from "antd/es/form";

const { Option } = Select;

type IOption = {
  name: string;
  id: string;
};

type WidgetFormProps = {
  form: FormInstance;
  widgetTypes: IOption[];
  eventSchemas: IOption[];
  eventSchemaFields: IOption[];
  onChange: (changedValues: any) => void;
};

const WidgetForm = ({
  form,
  widgetTypes,
  eventSchemas,
  eventSchemaFields,
  onChange,
}: WidgetFormProps) => {
  const initialValues = {
    widgetType: widgetTypes ? widgetTypes[0]?.id : undefined,
    eventSchema: eventSchemas ? eventSchemas[0]?.id : undefined,
  };

  const eventSchemaFieldsDisable = !(
    form.getFieldValue("eventSchema") && eventSchemaFields
  );

  return (
    <Form form={form} initialValues={initialValues} onValuesChange={onChange}>
      <Form.Item<string>
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input widget title",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="widgetType"
        label="Widget Type"
        rules={[{ required: true }]}
      >
        <Select>
          {widgetTypes.map((x) => (
            <Option key={x.id} value={x.id}>
              {x.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="eventSchema"
        label="Event Schema"
        rules={[{ required: true }]}
      >
        <Select>
          {eventSchemas.map((x) => (
            <Option key={x.id} value={x.id}>
              {x.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="eventSchemaField"
        label="Event Schema Fields"
        rules={[{ required: true }]}
      >
        <Select disabled={eventSchemaFieldsDisable}>
          {eventSchemaFields.map((x) => (
            <Option key={x.id} value={x.id}>
              {x.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default WidgetForm;

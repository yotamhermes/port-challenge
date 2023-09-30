import { Input, Form, Select } from "antd";
import { chartTypes } from "../../utils/chartTypes";

const { Option } = Select;

type WidgetFormProps = {
  form: any;
};

const WidgetForm = ({ form }: WidgetFormProps) => {
  return (
    <Form form={form}>
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
      <Form.Item name="type" label="Widget Type" rules={[{ required: true }]}>
        <Select defaultValue={chartTypes[0].id}>
          {chartTypes.map((x) => (
            <Option value={x.id}>{x.name}</Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default WidgetForm;

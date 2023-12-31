import { Input, Form, Button, Space, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import type { FormInstance } from "antd/es/form";
import styles from "./schemaForm.module.css";

const { Option } = Select;

const allowdTypes = ["string", "number", "boolean"];

const fieldsRenderer = (fields: any, { add, remove }: any, { errors }: any) => (
  <Form.Item label="Fields" required={true}>
    {fields.map((key: any, name: any) => (
      <div
        key={key.fieldKey}
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: 16,
          marginBottom: "12px",
        }}
      >
        <Space>
          <Form.Item
            required={false}
            name={[name, "fieldName"]}
            rules={[{ required: true, message: "Missing Field Name" }]}
            noStyle
          >
            <Input placeholder="Field Name" />
          </Form.Item>
          <Form.Item
            name={[name, "fieldType"]}
            rules={[{ required: true, message: "Missing Field type" }]}
            noStyle
          >
            <Select placeholder="Field Type">
              {allowdTypes.map((x) => (
                <Option key={x} value={x}>
                  {x}
                </Option>
              ))}
            </Select>
          </Form.Item>
          {fields.length > 1 ? (
            <MinusCircleOutlined
              className={styles.dynamicDeleteButton}
              onClick={() => remove(name)}
            />
          ) : null}
        </Space>
      </div>
    ))}
    <Form.Item>
      <Button
        type="dashed"
        onClick={() => add()}
        style={{ width: "60%" }}
        icon={<PlusOutlined />}
      >
        Add field
      </Button>
      <Form.ErrorList errors={errors} />
    </Form.Item>
  </Form.Item>
);

type SchemaFormProps = {
  form: FormInstance;
};

const SchemaForm = ({ form }: SchemaFormProps) => {
  return (
    <Form form={form} labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
      <Form.Item<string>
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input name",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.List name="fields">{fieldsRenderer}</Form.List>
    </Form>
  );
};

export default SchemaForm;

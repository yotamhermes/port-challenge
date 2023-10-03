import { List, Tooltip, Button } from "antd";
import AddSchemaButton from "../AddSchema/AddSchemaButton";
import {
  DeleteOutlined,
  PlusOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import { Modal } from "antd";
import styles from "./schemas.module.css";
import { IEventSchema } from "../../../types/types";

const { confirm } = Modal;

type Props = {
  schemas: IEventSchema[];
  onDeleteSchema: (id: string) => void;
  onAddedSchema: () => void;
};

const confirmDelete = (callback: Function) => {
  confirm({
    title: "Are you sure you want to delete these widget?",
    icon: <ExclamationCircleFilled />,
    content:
      "This action will permanently deleted schema and all realted events",
    okText: "Delete",
    okType: "danger",
    onOk: () => {
      return callback();
    },
  });
};

function Admin({ schemas, onDeleteSchema, onAddedSchema }: Props) {
  const header = (
    <div className={styles.header}>
      <h2>Schemas</h2>
      <AddSchemaButton onSubmit={onAddedSchema} className={styles.addButton} />
    </div>
  );
  return (
    <div className="app-panel">
      <List
        className={styles.list}
        header={header}
        itemLayout="horizontal"
        dataSource={schemas}
        bordered
        renderItem={(item: any, index) => (
          <List.Item
            actions={[
              <Tooltip title="Delete Schema">
                <Button
                  onClick={() => confirmDelete(() => onDeleteSchema(item.id))}
                  icon={<DeleteOutlined />}
                />
              </Tooltip>,
              <Tooltip title="Add Schema Event">
                <Button icon={<PlusOutlined />} />
              </Tooltip>,
            ]}
          >
            <List.Item.Meta
              title={item.name}
              description={item.fields.join(", ")}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default Admin;

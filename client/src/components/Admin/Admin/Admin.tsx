import { List, Tooltip, Button } from "antd";
import AddSchemaButton from "../AddSchema/AddSchemaButton";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

import styles from "./admin.module.css";

const data = [
  {
    title: "deployment-logs",
    description: "env, log-level, type, name, timestamp",
  },
  {
    title: "deployment-logs",
    description: "env, log-level, type, name, timestamp",
  },
  {
    title: "deployment-logs",
    description: "env, log-level, type, name, timestamp",
  },
  {
    title: "deployment-logs",
    description: "env, log-level, type, name, timestamp",
  },
];

function Admin() {
  const header = (
    <div className={styles.header}>
      <h2>Schemas</h2>
      <AddSchemaButton className={styles.addButton} />
    </div>
  );
  return (
    <div className="app-panel">
      <List
        className={styles.list}
        header={header}
        itemLayout="horizontal"
        dataSource={data}
        bordered
        renderItem={(item: any, index) => (
          <List.Item
            actions={[
              <Tooltip title="Delete Schema">
                <Button icon={<DeleteOutlined />} />
              </Tooltip>,
              <Tooltip title="Add Schema Event">
                <Button icon={<PlusOutlined />} />
              </Tooltip>,
            ]}
          >
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        )}
      />
    </div>
  );
}

export default Admin;

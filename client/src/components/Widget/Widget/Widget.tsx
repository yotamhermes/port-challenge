import { ReactNode, forwardRef } from "react";
import { Card } from "antd";
import { ReloadOutlined, DeleteOutlined } from "@ant-design/icons";

import styles from "./styles.module.css";

type Props = {
  onDelete: () => void;
  title: string;
  children: ReactNode;
  onReload: () => void;
};

const Widget = (
  { title, children, onDelete, onReload, ...otherProps }: Props,
  ref: any
) => {
  const bodyStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "78%",
  };
  return (
    <Card
      bodyStyle={bodyStyle}
      className={styles.card}
      ref={ref}
      title={title}
      actions={[
        <ReloadOutlined key="reload" onClick={onReload}/>,
        <DeleteOutlined key="delete" onClick={onDelete} />,
      ]}
      {...otherProps}
    >
      <div className={styles.childContainer}>{children}</div>
    </Card>
  );
};

export default forwardRef(Widget);

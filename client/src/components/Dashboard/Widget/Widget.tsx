import { ReactNode, forwardRef } from "react";
import { Card } from "antd";
import styles from "./styles.module.css";

type Props = {
  title: string;
  children: ReactNode;
};

const Widget = ({ title, children, ...otherProps }: Props, ref: any) => {
  const bodyStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  };
  return (
    <Card
      bodyStyle={bodyStyle}
      className={styles.card}
      ref={ref}
      title={title}
      {...otherProps}
    >
      <div className={styles.childContainer}>{children}</div>
    </Card>
  );
};

export default forwardRef(Widget);

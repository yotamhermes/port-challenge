import classNames from "classnames";
import GridLayout, { WidthProvider } from "react-grid-layout";
import WidgetContainer from "../Widget/Widget/WidgetContainer";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { IWidget } from "../../types/types";
import { FloatButton } from "antd";
import { PlusOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import { useState } from "react";
import WidgetSettingsContainer from "../Widget/WidgetSetting/WidgetSettingsContainer";
import styles from "./dashboard.module.css";

const { confirm } = Modal;

const Layout = WidthProvider(GridLayout);

type Props = {
  widgets: IWidget[];
  onDeleteWidget: (id?: number) => void;
  onAddWidget: () => void;
};

const confirmDelete = (callback: Function) => {
  confirm({
    title: "Are you sure you want to delete these widget?",
    icon: <ExclamationCircleFilled />,
    content: "This will be permanently deleted",
    okText: "Delete",
    okType: "danger",
    onOk: () => {
      return callback();
    },
  });
};

function Dashboard({ widgets, onDeleteWidget, onAddWidget }: Props) {
  const containerClasses = classNames("app-panel", styles.container);
  const [open, setOpen] = useState(false);

  return (
    <div className={containerClasses}>
      <Layout
        // a hack to fix react-grid bug
        resizeHandle={() => <></>}
        isResizable={false}
        className={styles.layout}
        cols={12}
        onLayoutChange={() => {}}
      >
        {widgets.map((x) => {
          const position = {
            ...x.position,
            i: `${x.id}`,
            w: 3,
            h: 3,
          };
          return (
            <WidgetContainer
              key={x.id}
              data-grid={position}
              widget={x}
              onDelete={() => confirmDelete(() => onDeleteWidget(x.id))}
            >
            </WidgetContainer>
          );
        })}
      </Layout>
      <FloatButton
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => setOpen(true)}
      />
      <WidgetSettingsContainer
        open={open}
        setOpen={setOpen}
        onAddWidget={onAddWidget}
      />
    </div>
  );
}

export default Dashboard;

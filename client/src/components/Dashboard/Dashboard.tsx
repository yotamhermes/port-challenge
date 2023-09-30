import classNames from "classnames";
import GridLayout, { WidthProvider } from "react-grid-layout";
import Widget from "./Widget/Widget";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { IWidget } from "../../types/types";
import styles from "./dashboard.module.css";
import { typeToChart } from "../../utils/typeToChart";
import { FloatButton } from "antd";
import { PlusOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";

const { confirm } = Modal;

const Layout = WidthProvider(GridLayout);

type Props = {
  widgets: IWidget[];
  onDeleteWidget: (id: number) => void;
};

const confirmDelete = (callback: Function) => {
  confirm({
    title: "Are you sure you want to delete these widget?",
    icon: <ExclamationCircleFilled />,
    content: "This will be permanently deleted",
    onOk: () => {
      return callback();
    },
  });
};

function Dashboard({ widgets, onDeleteWidget }: Props) {
  const containerClasses = classNames("app-panel", styles.container);

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
            <Widget
              key={x.id}
              data-grid={position}
              title={x.title}
              onDelete={() => confirmDelete(() => onDeleteWidget(x.id))}
            >
              {typeToChart(x.type)}
            </Widget>
          );
        })}
      </Layout>
      <FloatButton
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => console.log("click")}
      />
    </div>
  );
}

export default Dashboard;

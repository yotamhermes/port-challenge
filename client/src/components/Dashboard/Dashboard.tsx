import classNames from "classnames";
import GridLayout, { WidthProvider } from "react-grid-layout";
import Widget from "./Widget/Widget";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { IWidget } from "../../types/types";
import styles from "./dashboard.module.css";
import { typeToChart } from "../../utils/typeToChart";

const Layout = WidthProvider(GridLayout);

type Props = {
  widgets: IWidget[];
};

function Dashboard({ widgets }: Props) {
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
            <Widget key={x.id} data-grid={position} title={x.title}>
              {typeToChart(x.type)}
            </Widget>
          );
        })}
      </Layout>
    </div>
  );
}

export default Dashboard;

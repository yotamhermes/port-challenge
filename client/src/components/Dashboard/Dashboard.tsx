import BarChart from "../Charts/BarChart";
import PieChart from "../Charts/PieChart";
import classNames from "classnames";
import styles from "./dashboard.module.css";

function Dashboard() {
  const containerClasses = classNames("app-panel", styles.container);

  return (
    <div className={containerClasses}>
      <BarChart />
      <PieChart />
    </div>
  );
}

export default Dashboard;

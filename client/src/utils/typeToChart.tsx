import BarChart from "../components/Charts/BarChart";
import PieChart from "../components/Charts/PieChart";

export const typeToChart = (type: string) => {
  switch (type) {
    case "bar":
      return <BarChart />;
    case "pie":
      return <PieChart />;
    default:
      return <></>;
  }
};

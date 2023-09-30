import BarChart from "../components/Charts/BarChart";
import PieChart from "../components/Charts/PieChart";

export const chartTypes = [
  {
    id: 'bar',
    name: 'Bar Chart'
  },
  {
    id: 'pie',
    name: 'Pie Chart'
  }
]

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


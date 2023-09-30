import { VictoryBar, VictoryChart, VictoryTheme } from "victory";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

function BarChart() {
  return (
    <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
      <VictoryBar
        style={{ data: { fill: "#415CF2" } }}
        data={data}
        x="quarter"
        y="earnings"
      />
    </VictoryChart>
  );
}

export default BarChart;

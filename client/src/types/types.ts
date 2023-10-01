export type IWidget = {
  id?: number;
  title: string;
  type: string;
  schemaId: string;
  schemaField: string;
  position: {
    x: number;
    y: number;
  };
};

export type IEventSchema = {
  id: string;
  name: string;
  fields: string[];
};

export type IChartData = {
  type: string;
  count: number;
};

export type ChartProps = {
  data?: IChartData[];
  loading: boolean;
};

export type ChartComponent<ChartProps> = React.FC<ChartProps>;

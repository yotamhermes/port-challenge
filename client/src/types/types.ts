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

export type IEventSchemaField = {
  fieldName: string;
  fieldType: string;
};

export type INewEventSchema = {
  name: string;
  fields: IEventSchemaField[];
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

import { forwardRef, useEffect, useState } from "react";
import { IChartData, IWidget } from "../../../types/types";
import { typeToChart } from "../../../utils/chartTypes";
import Widget from "./Widget";
import { getEventsCountBy } from "../../../services/event";

type Props = {
  onDelete: () => void;
  widget: IWidget;
};

const WidgetContainer = (
  { widget, onDelete, ...otherProps }: Props,
  ref: any
) => {
  const [chartData, setChartData] = useState<IChartData[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    loadChartData();
  }, []);

  const loadChartData = () => {
    setLoading(true);

    getEventsCountBy(widget.schemaId, widget.schemaField)
      .then((res) => setChartData(res))
      .then(() => setLoading(false));
  };
  
  const Component = typeToChart(widget.type);

  return (
    <Widget
      ref={ref}
      title={widget.title}
      onDelete={onDelete}
      onReload={loadChartData}
      {...otherProps}
    >
      <Component data={chartData} loading={loading} />
    </Widget>
  );
};

export default forwardRef(WidgetContainer);

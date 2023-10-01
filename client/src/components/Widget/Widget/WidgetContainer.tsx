import { ReactNode, forwardRef, useEffect, useState } from "react";
import { IChartData, IWidget } from "../../../types/types";
import { typeToChart } from "../../../utils/chartTypes";
import Widget from "./Widget";
import { getEventsCountBy } from "../../../services/event";

type Props = {
  onDelete: () => void;
  children: ReactNode;
  widget: IWidget;
};

const WidgetContainer = (
  { widget, children, onDelete, ...otherProps }: Props,
  ref: any
) => {
  const [chartData, setChartData] = useState<IChartData[]>();

  useEffect(() => {
    loadChartData();
  }, []);

  const loadChartData = () => {
    return getEventsCountBy(widget.schema, widget.schemField).then((res) =>
      setChartData(res)
    );
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
      <Component data={chartData} />
    </Widget>
  );
};

export default forwardRef(WidgetContainer);

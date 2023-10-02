import { getWidgets, deleteWidget, updateLayout } from "../../services/widgets";
import { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import { IWidget } from "../../types/types";

function DashboardContainer() {
  const [widgets, setWidgets] = useState<IWidget[]>([]);

  useEffect(() => {
    loadWidget();
  }, []);

  const loadWidget = () => {
    getWidgets().then((widgets) => setWidgets(widgets as IWidget[]));
  };

  const handleDelete = (id?: number) => {
    return deleteWidget(id).then(loadWidget);
  };

  const handleChangeLayout = (layout: any) => {
    const parsed = layout.map((w: any) => ({
      id: w.i,
      x: w.x,
      y: w.y,
    }));
    updateLayout(parsed);
  };

  return (
    <Dashboard
      widgets={widgets}
      onDeleteWidget={handleDelete}
      onAddWidget={loadWidget}
      onLayoutChange={handleChangeLayout}
    />
  );
}

export default DashboardContainer;

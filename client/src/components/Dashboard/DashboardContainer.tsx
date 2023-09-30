import { getWidgets, deleteWidget } from "../../services/widgets";
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

  const handleDelete = (id: number) => {
    return deleteWidget(id).then(loadWidget);
  };

  return <Dashboard widgets={widgets} onDeleteWidget={handleDelete} />;
}

export default DashboardContainer;

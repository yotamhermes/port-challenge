import { getWidgets } from "../../services/widgets";
import { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import { IWidget } from "../../types/types";

function DashboardContainer() {
  const [widgets, setWidgets] = useState<IWidget[]>([]);

  useEffect(() => {
    getWidgets().then((widgets) => setWidgets(widgets as IWidget[]));
  });

  return <Dashboard widgets={widgets} />;
}

export default DashboardContainer;

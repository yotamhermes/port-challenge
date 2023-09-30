import { addWidget } from "../../../services/widgets";
import { IWidget } from "../../../types/types";
import WidgetSettings from "./WidgetSettings";

type Props = {
  open: boolean;
  setOpen: any;
  onAddWidget: () => void;
};

const WidgetSettingsContainer = ({ open, setOpen, onAddWidget }: Props) => {
  const handleAddWidget = (widget: IWidget) => {
    return addWidget(widget).then(onAddWidget);
  };

  return (
    <WidgetSettings
      open={open}
      setOpen={setOpen}
      onAddWidget={handleAddWidget}
    />
  );
};

export default WidgetSettingsContainer;

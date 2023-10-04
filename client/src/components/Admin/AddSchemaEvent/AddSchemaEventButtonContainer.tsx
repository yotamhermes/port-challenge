import { useEffect, useState } from "react";
import AddEventSchemaButton from "./AddSchemaEventButton";
import { IEventSchemaField } from "../../../types/types";
import { addEvent } from "../../../services/event";
import { getSchemaFields } from "../../../services/eventSchemas";

type Props = {
  schemaId: string;
};

function AddEventSchemaButtonContainer({ schemaId }: Props) {
  const [fields, setFields] = useState<IEventSchemaField[]>([]);

  useEffect(() => {
    loadFields();

    // eslint-disable-next-line
  }, []);

  const loadFields = () => {
    return getSchemaFields(schemaId).then(setFields);
  };

  const handleAddTestEvent = (event: object) => {
    return addEvent(schemaId, event);
  };
  return (
    <AddEventSchemaButton fields={fields} onAddTestEvent={handleAddTestEvent} />
  );
}

export default AddEventSchemaButtonContainer;

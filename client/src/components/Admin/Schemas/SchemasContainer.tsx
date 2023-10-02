import Schemas from "./Schemas";
import {
  getEventSchemas,
  deleteEventSchemas,
} from "../../../services/eventSchemas";
import { useEffect, useState } from "react";
import { IEventSchema } from "../../../types/types";

function SchemasContainer() {
  const [schemas, setSchemas] = useState<IEventSchema[]>([]);

  useEffect(() => {
    loadSchemas();
  }, []);

  const loadSchemas = () => {
    getEventSchemas().then((res) => {
      setSchemas(res);
    });
  };

  const handleDeleteSchema = (id: string) => {
    deleteEventSchemas(id).then(loadSchemas);
  };
  return <Schemas schemas={schemas} onDeleteSchema={handleDeleteSchema} />;
}

export default SchemasContainer;

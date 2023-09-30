import WidgetForm from "./WidgetForm";
import type { FormInstance } from "antd/es/form";
import { chartTypes } from "../../../utils/chartTypes";
import { useEffect, useState } from "react";
import { getEventSchemas } from "../../../services/eventSchemas";
import { IEventSchema } from "../../../types/types";

type WidgetFormProps = {
  form: FormInstance;
};

type IFormValues = {
  title: string;
  eventSchema: string;
  eventSchemaField: string;
};

const WidgetFormContainer = ({ form }: WidgetFormProps) => {
  const [eventSchemas, setEventSchemas] = useState<IEventSchema[]>([]);
  const [eventSchemaFields, setEventSchemaFields] = useState<string[]>([]);

  useEffect(() => {
    getEventSchemas().then((eventSchemas) =>
      setEventSchemas(eventSchemas as IEventSchema[])
    );
  }, []);

  const handleValuesChange = (changedValues: IFormValues) => {
    if (changedValues.eventSchema) {
      form.resetFields(["eventSchemaField"]);
      setEventSchemaFields(
        eventSchemas.find((x) => `${x.id}` === changedValues.eventSchema)
          ?.fields as string[]
      );
    }
  };

  return (
    <WidgetForm
      form={form}
      widgetTypes={chartTypes}
      eventSchemas={eventSchemas.map((x) => ({ id: `${x.id}`, name: x.name }))}
      eventSchemaFields={eventSchemaFields.map((x) => ({ id: x, name: x }))}
      onChange={handleValuesChange}
    />
  );
};

export default WidgetFormContainer;

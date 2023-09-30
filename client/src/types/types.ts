export type IWidget = {
  id: number;
  title: string;
  type: string;
  position: {
    x: number;
    y: number;
  };
};

export type IEventSchema = {
  id: number;
  name: string;
  fields: string[];
};
export type IWidget = {
  id: number;
  title: string;
  size: number,
  type: string,
  position: {
    x: number;
    y: number;
  };
};

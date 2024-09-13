export type Node = {
  id: string | number;
  title: string;
  children?: Array<Node>;
};

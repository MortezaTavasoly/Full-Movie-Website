export interface TTabProps {
  id: number;
  type?: "horizontal" | "vertical";
  classes?: string;
  children?: React.ReactNode[];
  items: TItems[];
}

export interface TItems {
  id: number;
  key: string;
  text: string;
  event?: CallableFunction;
  icon?: string;
  classes?: string;
}

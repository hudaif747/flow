export interface ITodoItem {
  id: number;
  text?: string;
  checked: boolean;
}

export const DnDType = {
  ITEM: "item",
};

export interface IBasket {
  title: string;
  badgeCount: number;
  description: string;
}

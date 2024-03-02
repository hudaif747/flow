export interface ITodoItem {
  id: number;
  text?: string;
  checked: boolean;
}

export const DnDType = {
  ITEM: "todo_item",
};

export interface IBasket {
  title: string;
  badgeCount: number;
  description: string;
  todos: ITodoItem[];
}

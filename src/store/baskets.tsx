import { create } from "zustand";
import { IBasket, ITodoItem } from "@/types/appTypes";
import { useTodoStore } from "./todos";

interface BasketState {
  baskets: IBasket[];
  addBasket: (basket: IBasket) => void;
  removeBasket: (basketTitle: string) => void;
  addGlobalTodoToBasket: (basketTitle: string, todoId: number) => void;
  removeTodoFromBasket: (basketTitle: string, todoId: number) => void;
  addNewTodoToBasket: (basketTitle: string, todo: ITodoItem) => void;
  updateTodoInBasket: (
    basketTitle: string,
    todoId: number,
    updatedFields: Partial<ITodoItem>
  ) => void;
}

export const useBasketStore = create<BasketState>((set) => ({
  baskets: [
    { title: "Life", badgeCount: 0, description: "2024 goals", todos: [] },
    { title: "Work", badgeCount: 0, description: "Work goals", todos: [] },
    {
      title: "Personal",
      badgeCount: 0,
      description: "Personal Development",
      todos: [],
    },
    { title: "Fitness", badgeCount: 0, description: "Health Goals", todos: [] },
    {
      title: "Travel",
      badgeCount: 0,
      description: "Explore New Places",
      todos: [],
    },
    // {
    //   title: "Finance",
    //   badgeCount: 0,
    //   description: "Financial Planning",
    //   todos: [],
    // },
    // {
    //   title: "Hobbies",
    //   badgeCount: 0,
    //   description: "Leisure Pursuits",
    //   todos: [],
    // },
    // {
    //   title: "Learning",
    //   badgeCount: 0,
    //   description: "Academic Growth",
    //   todos: [],
    // },
    // {
    //   title: "Relationships",
    //   badgeCount: 0,
    //   description: "Social Connections",
    //   todos: [],
    // },
    // {
    //   title: "Creativity",
    //   badgeCount: 0,
    //   description: "Expressive Pursuits",
    //   todos: [],
    // },
    // {
    //   title: "Organization",
    //   badgeCount: 0,
    //   description: "Decluttering and Efficiency",
    //   todos: [],
    // },
    // {
    //   title: "Skills",
    //   badgeCount: 0,
    //   description: "Skill Development",
    //   todos: [],
    // },
    // {
    //   title: "Volunteering",
    //   badgeCount: 0,
    //   description: "Community Engagement",
    //   todos: [],
    // },
  ],
  addBasket: (basket) =>
    set((state) => ({ baskets: [...state.baskets, basket] })),
  removeBasket: (basketTitle) =>
    set((state) => ({
      baskets: state.baskets.filter((basket) => basket.title !== basketTitle),
    })),
  addGlobalTodoToBasket: (basketTitle, todoId) => {
    const { todos } = useTodoStore.getState();
    const todoToAdd = todos.find((todo) => todo.id === todoId);
    if (!todoToAdd) {
      console.warn(`Todo with ID ${todoId} not found.`);
      return;
    }
    set((state) => ({
      baskets: state.baskets.map((basket) =>
        basket.title === basketTitle
          ? {
              ...basket,
              todos: [...basket.todos, todoToAdd],
              badgeCount: basket.todos.length + 1,
            }
          : basket
      ),
    }));
  },
  removeTodoFromBasket: (basketTitle, todoId) => {
    set((state) => ({
      baskets: state.baskets.map((basket) =>
        basket.title === basketTitle
          ? {
              ...basket,
              todos: basket.todos.filter((todo) => todo.id !== todoId),
              badgeCount: basket.todos.length - 1,
            }
          : basket
      ),
    }));
  },
  addNewTodoToBasket: (basketTitle, todo) => {
    set((state) => ({
      baskets: state.baskets.map((basket) =>
        basket.title === basketTitle
          ? {
              ...basket,
              todos: [...basket.todos, todo],
              badgeCount: basket.todos.length + 1,
            }
          : basket
      ),
    }));
  },
  updateTodoInBasket: (basketTitle, todoId, updatedFields) => {
    set((state) => ({
      baskets: state.baskets.map((basket) => {
        if (basket.title === basketTitle) {
          return {
            ...basket,
            todos: basket.todos.map((todo) =>
              todo.id === todoId ? { ...todo, ...updatedFields } : todo
            ),
          };
        }
        return basket;
      }),
    }));
  },
}));

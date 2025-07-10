export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

export interface IInitialState {
  todos: ITodo[];
  isLoading: boolean;
}

export interface IActions {
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}

export interface ITodosState extends IInitialState, IActions {}

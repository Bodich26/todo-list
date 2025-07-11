export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface IInitialState {
  todos: ITodo[];
  isLoading: boolean;
}

export interface IActions {
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  completeTodo: (id: string) => void;
}

export interface ITodosState extends IInitialState, IActions {}

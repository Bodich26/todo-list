export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface IInitialState {
  todos: ITodo[];
}

export interface IActions {
  setTodos: (todos: ITodo[]) => void;
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  completeTodo: (id: string) => void;
}

export interface ITodosState extends IInitialState, IActions {}

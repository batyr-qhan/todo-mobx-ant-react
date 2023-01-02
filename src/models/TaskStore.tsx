import { destroy, types } from "mobx-state-tree";
import Todo from "./Todo";

const TaskStore = types
  .model("Todo", {
    Todos: types.array(Todo),
    InputValue: "",
  })
  .views((self) => {
    return {
      getFilteredTodos() {
        return self.Todos.filter((el) => el.title.includes(self.InputValue));
      },
    };
  })
  .actions((self) => ({
    clearField() {
      self.InputValue = "";
    },
    add(task: typeof Todo.Type) {
      self.Todos.push(task);
    },
    removeTodo(task: typeof Todo.Type) {
      destroy(task);
    },
    updateValue(val: string) {
      self.InputValue = val;
    },
    editTodo(task: typeof Todo.Type, newValue: string) {
      console.log(self.Todos)
      self.Todos.map((el) => {
        if (el.id === task.id) {
          alert('owieruwoie')
          return {
            ...el,
            title: newValue,
          };
        }
        return el;
      });
    },
  }));
export default TaskStore;

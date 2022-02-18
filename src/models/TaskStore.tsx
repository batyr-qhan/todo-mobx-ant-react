import { destroy, types } from "mobx-state-tree";
import Todo from "./Todo";

const TaskStore = types
  .model("Todo", {
    Todo: types.array(Todo),
    InputValue: "",
  })
  .views((self) => {
    return {
      getFilteredTodos() {
        return self.Todo.filter((el) => el.title.includes(self.InputValue));
      },
    };
  })
  .actions((self) => ({
        clearField() {
        self.InputValue = "";
        },
    add(task: typeof Todo.Type) {
      self.Todo.push(task);
    },
    removeTodo(task: typeof Todo.Type) {
      destroy(task)
    },
    updateValue(val: string) {
      self.InputValue = val;
    },
  }));
export default TaskStore;

import { types } from "mobx-state-tree";
const Todo = types
  .model("Todo", {
    id: types.number,
    title: types.string,
    is_done: false,
  })
  .actions((self) => ({
    markDone() {
      self.is_done = true;
    },
    toggle() {
        self.is_done = !self.is_done
    },
    ontoggle(status: boolean) {
      self.is_done = status
    }
  }))
  .views((self) => ({
    status() {
      return self.is_done ? "Done" : "Not Done";
    },
  }));
export default Todo;

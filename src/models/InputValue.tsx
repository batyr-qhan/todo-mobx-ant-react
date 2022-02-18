import { types } from "mobx-state-tree";
const InputValue = types
  .model("InputValue", {
    // id: types.identifier,
    inputValue: types.string,
  })
  .actions((self) => ({
    updateValue(value: string) {
      self.inputValue = value;
    },
  }));
export default InputValue;

import { useState } from "react";
import TaskStore from "../../models/TaskStore";
import { Button, Input, FormContainer, Label } from "./styles";

type Props = {
  store: typeof TaskStore.Type;
};

const Form: React.FC<Props> = ({ store }) => {
  const [localInputValue, setLocalInputValue] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.updateValue(e.target.value);
    setLocalInputValue(e.target.value);
  };
  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        store.add({
          title: store.InputValue,
          is_done: false,
        });
        setLocalInputValue("");
        store.clearField();
      }}
    >
      {" "}
      <Label>
        <Input
          type="text"
          onChange={onChangeHandler}
          value={localInputValue}
          placeholder="pls input your next todo..."
        />
      </Label>
      <Button disabled={!Boolean(store.InputValue)} type="submit">
        Add
      </Button>
    </FormContainer>
  );
};

export default Form;

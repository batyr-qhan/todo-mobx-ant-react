import { Button } from "antd";
import { useState } from "react";
import TaskStore from "../../models/TaskStore";
import { Input, FormContainer, Label } from "./styles";

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
          id: Math.random(),
          title: store.InputValue,
          is_done: false,
          markDone: function (): void {
            throw new Error("Function not implemented.");
          },
          toggle: function (): void {
            throw new Error("Function not implemented.");
          },
          ontoggle: function (status: boolean): void {
            throw new Error("Function not implemented.");
          },
          status: function (): "Done" | "Not Done" {
            throw new Error("Function not implemented.");
          },
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
      <Button type="primary" htmlType="submit">
        Add
      </Button>
      {/* <Button disabled={!Boolean(store.InputValue)} type="submit">
        Add
      </Button> */}
    </FormContainer>
  );
};

export default Form;

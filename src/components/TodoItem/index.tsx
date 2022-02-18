import { observer } from "mobx-react";
import Todo from "../../models/Todo";
import { FaTrashAlt } from "react-icons/fa";
import TaskStore from "../../models/TaskStore";
import { ItemContainer, Content, RemoveIcon } from "./styles";
import { Text } from "../Text";
import Checkbox from "../Checkbox";

type Props = {
  todo: typeof Todo.Type;
  store: typeof TaskStore.Type;
};

const TodoItem: React.FC<Props> = ({ todo, store }) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    todo.ontoggle(e.target.checked);
  };
  const removeHanlder = () => {
    store.removeTodo(todo);
  };
  return (
    <ItemContainer>
      <Content>
        <Checkbox onChange={onChangeHandler} checked={todo.is_done} />
        <Text done={todo.is_done}>{todo.title}</Text>
      </Content>
      <RemoveIcon>
        <FaTrashAlt onClick={removeHanlder} color="#fc3a52" />
      </RemoveIcon>
    </ItemContainer>
  );
};

export default observer(TodoItem);

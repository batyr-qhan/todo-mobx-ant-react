import { observer } from "mobx-react";
import Todo from "../../models/Todo";
import { FaCheck, FaCloud, FaCross, FaEdit, FaTrashAlt } from "react-icons/fa";
import {
  IoBrushOutline,
  IoCheckmarkOutline,
  IoCloseOutline,
  IoRemoveCircleOutline,
  IoTrashOutline,
} from "react-icons/io5";
import TaskStore from "../../models/TaskStore";
import {
  ItemContainer,
  Content,
  IconContainer,
  IconsContainer,
} from "./styles";
import { Text } from "../Text";
import Checkbox from "../Checkbox";
import React, { useState } from "react";
import { Input } from "antd";

type Todo = {
  id: number;
  title: string;
  is_done: boolean;
};

type Props = {
  todo: {
    id: number;
    title: string;
    is_done: boolean;
  };
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
};

const TodoItem: React.FC<Props> = ({ todo, setTodos, todos }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedValue, setEditedValue] = useState(todo.title);

  const onCheckHandler = () => {
    const updatedTodos = todos.map((el) => {
      if (el.id === todo.id) {
        return { ...el, is_done: !el.is_done };
      }
      return el;
    });

    setTodos(updatedTodos);
  };

  // console.log(todo);

  const onEditChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedValue(e.target.value);
  };

  function handleDeleteClick() {
    const removeItem = todos.filter((el) => {
      return el.id !== todo.id;
    });
    setTodos(removeItem);
  }

  function handleEditSubmit() {
    const updatedItem = todos.map((el) => {
      if (el.id === todo.id) {
        return { ...el, title: editedValue };
      }
      return el;
    });

    setTodos(updatedItem);
    setEditMode(false);
  }

  return (
    <ItemContainer>
      <Content>
        <Checkbox onChange={onCheckHandler} checked={todo.is_done} />
        {editMode ? (
          <Input
            className="item-edit-input"
            size="middle"
            value={editedValue}
            onChange={onEditChangeHandler}
          />
        ) : (
          <Text done={todo.is_done}>{todo.title}</Text>
        )}
      </Content>

      {editMode ? (
        <IconsContainer>
          <IconContainer>
            <IoCheckmarkOutline
              size={18}
              color="green"
              onClick={handleEditSubmit}
            />
          </IconContainer>
          <IconContainer>
            <IoCloseOutline
              size={18}
              color="#fc3a52"
              onClick={() => {
                setEditMode(false);
              }}
            />
          </IconContainer>
        </IconsContainer>
      ) : (
        <IconsContainer>
          <IconContainer>
            <IoBrushOutline
              size={16}
              color="#fc3a"
              onClick={() => {
                setEditMode((prev) => !prev);
              }}
            />
          </IconContainer>
          <IconContainer>
            <IoTrashOutline
              size={16}
              onClick={handleDeleteClick}
              color="#fc3a52"
            />
          </IconContainer>
        </IconsContainer>
      )}
    </ItemContainer>
  );
};

export default TodoItem;

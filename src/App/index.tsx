import React, { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
// import GlobalStyle from "../styles/global";
import { Container, Wrapper } from "./styles";
import "antd/dist/reset.css";
// import './App.css';

import { List } from "antd";
import InputForm from "../components/InputForm";
import { Todo } from "../shared/types";

type Props = {};

const App: React.FC<Props> = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    // get the todos from localstorage
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Wrapper>
      <Container>
        <InputForm todos={todos} setTodos={setTodos} />

        <List
          bordered
          dataSource={todos}
          renderItem={(item) => (
            <TodoItem
              key={item.id}
              todo={item}
              setTodos={setTodos}
              todos={todos.sort((a, b) => {
                if (a.is_done !== b.is_done) return 0;
                return 1;
              })}
            />
          )}
        />
      </Container>
    </Wrapper>
  );
};

export default App;

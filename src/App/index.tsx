import React from "react";

import { observer, inject } from "mobx-react"; //These functions make our components observable and be able to use the store
import TodoList from "../components/TodoItem";
import Form from "../components/Form";
import TaskStore from "../models/TaskStore";
import GlobalStyle from "../styles/global";
import {
  FormContainer,
  Container,
  Wrapper,
  TodoItemsContainer,
} from "./styles";

type Props = {
  store: typeof TaskStore.Type;
};

const App: React.FC<Props> = ({ store }) => {
  return (
    <>
      <GlobalStyle />

      <Wrapper>
        <Container>
          <FormContainer>
            <Form store={store} />
          </FormContainer>
          <TodoItemsContainer>
            {store.getFilteredTodos().map((todo, i) => (
              <TodoList todo={todo} key={i} store={store} />
            ))}
          </TodoItemsContainer>
        </Container>
      </Wrapper>
    </>
  );
};

export default inject("store")(observer(App));

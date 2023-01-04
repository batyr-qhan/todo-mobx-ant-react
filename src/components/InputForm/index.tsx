import React, { ChangeEvent, useState } from "react";
import { Form, Input, Checkbox, Button, List, FormInstance } from "antd";
import TaskStore from "../../models/TaskStore";
import { randomUUID } from "crypto";
import { Todo } from "../../shared/types";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const InputForm: React.FC<Props> = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");
  const [form] = Form.useForm();

  // function to create a new object on form submit
  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          title: todo.trim(),
          is_done: false,
          timeStamp: new Date(),
        },
      ]);
    }

    setTodo("");

    form.resetFields();
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    // set the new state value to what's currently in the input box
    setTodo(e.target.value);
  }

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ "todo-title": todo }}
      onFinish={handleFormSubmit}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="my-form"
    >
      <Form.Item name="todo-title" className="my-input">
        <Input placeholder="your next todo" onChange={handleInputChange} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" disabled={!todo}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default InputForm;

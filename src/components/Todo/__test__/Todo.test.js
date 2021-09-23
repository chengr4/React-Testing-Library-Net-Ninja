import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
}

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach(task => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
}

describe("Todo", () => {
  test('render same text passed into title prop', () => {
    // render app into virtual DOM
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: "do something" } });
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/do something/i);
    expect(divElement).toBeInTheDocument();
  });

  test('should render multiple items', () => {
    // render app into virtual DOM
    render(<MockTodo />);
    addTask(["1", "2", "3"]);
    const divElements = screen.getAllByTestId("task-container");
    expect(divElements.length).toBe(3);
  });

  test('tasks should not have completed class when initally rendered', () => {
    // render app into virtual DOM
    render(<MockTodo />);
    addTask(['do something']);
    const divElement = screen.getByText(/do something/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  test('tasks should have completed class when clicked', () => {
    // render app into virtual DOM
    render(<MockTodo />);
    addTask(['do something']);
    const divElement = screen.getByText(/do something/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});


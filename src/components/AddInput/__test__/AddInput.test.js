import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodo = jest.fn();

// Describe block
describe('AddInput', () => {
  test('should render input element', () => {
    render(
      <AddInput 
        todo={[]}
        setTodos={mockedSetTodo}
      />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('Types value and should change', () => {
    render(
      <AddInput 
        todo={[]}
        setTodos={mockedSetTodo}
      />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
    
    // trigger type event
    fireEvent.change(inputElement, { target: {
      value: "Go shopping"
    } });
    expect(inputElement.value).toBe("Go shopping");
  });

  test('Should have empty input when add button is clicked', () => {
    render(
      <AddInput
        todo={[]}
        setTodos={mockedSetTodo}
      />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    // trigger click event
    expect(inputElement.value).toBe("");
  });
});
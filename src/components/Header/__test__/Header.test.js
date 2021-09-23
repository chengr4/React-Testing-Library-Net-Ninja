import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('render same text passed into title prop', () => {
  // render app into virtual DOM
  render(<Header title={"MY HEADER"} />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

test('heading', () => {
  // render app into virtual DOM
  render(<Header title={"MY HEADER"} />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toBeInTheDocument();
});

test('render same text passed into title prop2', () => {
  // render app into virtual DOM
  render(<Header title={"MY HEADER"} />);
  const headingElement = screen.getByRole("heading", { name: "MY HEADER"});
  expect(headingElement).toBeInTheDocument();
});

// query
test('query', () => {
  // render app into virtual DOM
  render(<Header title={"MY HEADER"} />);
  const headingElement = screen.queryByText(/dog/i);
  expect(headingElement).not.toBeInTheDocument();
});
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import NoteForm from "./component/Noteform"; 

test("adds and deletes note", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/enter note/i);
  fireEvent.change(input, { target: { value: "New Note" } });
  fireEvent.click(screen.getByText(/add/i));
  expect(screen.getByText("New Note")).toBeInTheDocument();

  const deleteBtn = screen.getByText(/delete/i);
  fireEvent.click(deleteBtn);

  expect(screen.queryByText("New Note")).not.toBeInTheDocument();
});
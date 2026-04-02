
import { render, screen, fireEvent } from "@testing-library/react";
import NoteForm from "./Noteform";

test("adds note on submit", () => {
  const addNote = jest.fn();
  render(<NoteForm addNote={addNote} />);
  const titleInput = screen.getByPlaceholderText(/enter note/i);
  fireEvent.change(titleInput, { target: { value: "Test Note" } });
  fireEvent.click(screen.getByText(/add/i));
  expect(addNote).toHaveBeenCalledWith({ title: "Test Note", status: "created" });
});
// import { render, screen, fireEvent } from "@testing-library/react";
// import App from "./App";
// import NoteForm from "./Noteform";

// test("adds and deletes note", () => {
//   render(<App />);
//   fireEvent.change(screen.getByPlaceholderText(/enter note/i), {
//     target: { value: "New Note" },
//   });
//   fireEvent.click(screen.getByText(/add/i));
//   expect(screen.getByText(/note 1/i)).toBeInTheDocument();
//   fireEvent.click(screen.getByText(/delete/i));
//   expect(screen.queryByText(/note 2/i)).not.toBeInTheDocument();
// });
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import NoteForm from "./component/Noteform"; 

test("adds and deletes note", () => {
  render(<App />);

  // simulate typing in NoteForm input
  const input = screen.getByPlaceholderText(/enter note/i);
  fireEvent.change(input, { target: { value: "New Note" } });

  // simulate clicking Add button
  fireEvent.click(screen.getByText(/add/i));

  // check that note appears
  expect(screen.getByText("New Note")).toBeInTheDocument();

  // simulate deleting the note (if you have a delete button)
  const deleteBtn = screen.getByText(/delete/i);
  fireEvent.click(deleteBtn);

  // check that note is removed
  expect(screen.queryByText("New Note")).not.toBeInTheDocument();
});
import { useState } from "react";

function NoteForm({ addNote }) {
  const [note, setNote] = useState({ title: "", content: "open" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title.trim()) return;
    addNote(note);
    setNote({ title: "", content: "open" });
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: type === "checkbox" ? (checked ? "open" : "closed") : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Enter note"
        value={note.title}
        onChange={handleChange}
      />
      <label>
        Status
        <input
          name="content"
          type="checkbox"
          checked={note.content === "open"}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default NoteForm;
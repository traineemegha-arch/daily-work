import { useState } from "react";
import "../App.css";

function NoteForm({ addNote }) {
  const [note, setNote] = useState({ title: "", content: "",time:"" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title.trim()) return;
    addNote(note);
    const currentTime = note.time || new Date().toLocaleTimeString();
    setNote({ title: "", content: "",time:"" });
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
       Content:
          <input
        name="content"
        placeholder="Enter content"
        value={note.content}
        onChange={handleChange}
      />

        <input type="time" 
      name="time" 
      value={note.time} 
      onChange={handleChange} />

      </label>
      <button type="submit">Add</button>
    </form>
  );
}
export default NoteForm;
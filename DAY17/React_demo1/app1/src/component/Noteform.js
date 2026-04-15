import { useState } from "react";
import "../App.css";

function NoteForm({ addNote }) {

  const [note, setNote] = useState({
    title: "",
    content: "",
    time: "",
    priority: 50,
    status: "CREATED"
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!note.title.trim()) return;

    const newNote = {
      ...note
    };

    addNote(newNote);

    setNote({
      title: "",
      content: "",
      time: "",
      priority: 50,
      status: "CREATED"
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "content" && value.length > 200) return;

    setNote((prev) => ({
      ...prev,
      [name]: name === "priority" ? Number(value) : value
    }));
  };

  const words = note.content.trim().split(/\s+/).filter(Boolean);
  const wordCount = note.content.trim() ? words.length : 0;
  const charCount = note.content.length;

  return (
    <form onSubmit={handleSubmit}>

      <input
        name="title"
        placeholder="Enter note title"
        value={note.title}
        onChange={handleChange}
      />

      <label>
        Content:
        <textarea
          name="content"
          placeholder="Enter content"
          value={note.content}
          onChange={handleChange}
        />
        <p>{charCount}/200 characters</p>
      </label>

      <input
        type="time"
        name="time"
        value={note.time}
        onChange={handleChange}
      />

      <div className="slidecontainer" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <label>Priority:</label>

        <input
          type="range"
          min="1"
          max="100"
          name="priority"
          value={note.priority}
          onChange={handleChange}
          className="slider"
        />

        <span>{note.priority}</span>
      </div>

      <button type="submit">Add</button>

    </form>
  );
}

export default NoteForm;
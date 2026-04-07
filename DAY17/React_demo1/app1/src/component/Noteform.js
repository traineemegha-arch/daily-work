import { useState } from "react";
import "../App.css";

function NoteForm({ addNote }) {
  const [note, setNote] = useState({ title: "", content: "",time:"",range:50 });

    const handleSubmit = (e) => {
  e.preventDefault();
  console.log(note);
  if (!note.title.trim()) return;
  const newNote = {
    ...note,
    range: note.range,
    createdAt: new Date().toISOString()
  };
  addNote(newNote);
  setNote({ title: "", content: "", time: "", range: 50 });
};

  const handleChange = (e) => {
  const { name, value } = e.target;

  setNote((prev) => ({
    ...prev,
    [name]: name === "range" ? Number(value) : value
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

<div className="slidecontainer" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
  <label>Priority:</label>
  <input
    type="range"
    min="1"
    max="100"
    name="range"
    value={note.range}
    onChange={handleChange}
    className="slider"
  />
  <span>{note.range}</span>
</div>
</label>

      <button type="submit">Add</button>
    </form>
  );
}
export default NoteForm;
import { useState } from "react";
import "../App.css";

function NoteForm({ addNote }) {
  const [note, setNote] = useState({ title: "", content: "",time:"",range:50,status:"open" });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(note);
        if (!note.title.trim()) return;
  const newNote = {
         ...note,range: note.range,createdAt: new Date().toISOString()
};

  addNote(newNote);
  setNote({ title: "", content: "", time: "", range: 50 });
};

 const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  if (name === "content" && value.length > 200) return;
  setNote((prev) => ({
    ...prev,
    [name]:
      type === "checkbox"
        ? (checked ? "open" : "closed")
        : name === "range"
        ? Number(value)
        : value
  }));
};

const words = note.content.trim().split(/\s+/).filter(Boolean);
const wordCount = note.content.trim() ? words.length : 0;
const charCount = note.content.length;

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
          <textarea
        name="content"   
        placeholder="Enter content"
        value={note.content}
        onChange={handleChange}
      />
    <p>{charCount}/200 words</p>
      
    <input type="time" 
      name="time" 
      value={note.time} 
      onChange={handleChange} />

     <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    
</div>

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
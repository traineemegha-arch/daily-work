import { useState } from "react";

function NoteForm({ addNote }) {
  const [note, setNote] = useState({ title: "my note", status: "created" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title.trim()) return; 
    addNote(note); 
    setNote({ title: "", status: "created" }); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter note"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
      />
      <input
        placeholder="Status"
        value={note.status}
        onChange={(e) => setNote({ ...note, status: e.target.value })}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default NoteForm;
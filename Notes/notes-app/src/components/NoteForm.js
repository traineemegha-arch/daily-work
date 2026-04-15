import { useState } from "react";

function NoteForm({ addNote }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addNote(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter note"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <textarea
        placeholder="Content..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
      />
      <button>Add Note</button>
    </form>
  );
}

export default NoteForm;
import { useState, useEffect } from "react";
import NoteForm from "./component/NoteForm";
import NoteList from "./component/NoteList";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:300/notes")
      .then(res => setNotes(res.data))
      .catch(err => console.error(err));
  }, []);

  const addNote = (noteData) => {
    const newNote = { ...noteData, id: Date.now() };
    setNotes([...notes, newNote]);
    axios.post("http://localhost:3000/notes", newNote);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
    axios.delete(`http://localhost:3000/notes/${id}`);
  };

  return (
    <div>
      <h1>Notes App</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
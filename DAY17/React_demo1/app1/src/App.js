import { useState, useEffect } from "react";
import NoteForm from "./component/NoteForm";
import NoteList from "./component/NoteList";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const API = "http://localhost:3001/notes";
function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/notes")
      .then(res => setNotes(res.data))
      .catch(err => console.error(err));
  }, []);

  const addNote = (noteData) => {
    const newNote = { ...noteData, id: Date.now() };
    setNotes([...notes, newNote]);
    axios.post("http://localhost:3001/notes", newNote)
    .then(res => setNotes([...notes, res.data]))
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
    axios.delete(`http://localhost:3001/notes/${id}`);
  };

  return (
    <BrowserRouter>
    <div>
      <h1>Notes App</h1>
      {/* <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} /> */}
      <nav>
          <Link to="/">Notes</Link>
          {" | "}
          <Link to="/add">Add Note</Link>
        </nav>

        <Routes>
          <Route path="/" element={<NoteList notes={notes} deleteNote={deleteNote} />} />
          <Route path="/add" element={<NoteForm addNote={addNote} />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
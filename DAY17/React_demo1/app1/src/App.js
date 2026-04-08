import { useState, useEffect } from "react";
import NoteForm from "./component/NoteForm";
import NoteList from "./component/NoteList";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const API = "http://localhost:3001/notes";

function AppContent() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(API)
      .then(res => setNotes(res.data))
      .catch(console.error);
  }, []);

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.content.toLowerCase().includes(search.toLowerCase())
  );

  const addNote = (noteData) => {
    axios.post(API, { ...noteData, range: noteData.range ?? 50 })
      .then(res => setNotes(prev => [...prev, res.data]));
  };

  const deleteNote = (id) => {
    const note = notes.find(n => n.id === id);
    if (note.status === "open") {
      axios.patch(`${API}/${id}`, { status: "closed" })
        .then(() => setNotes(prev => prev.map(n => n.id === id ? { ...n, status: "closed" } : n)))
        .catch(console.error);
    } else {
      axios.delete(`${API}/${id}`)
        .then(() => setNotes(prev => prev.filter(n => n.id !== id)))
        .catch(console.error);
    }
  };

  const sortByPriority = () => {
    setNotes(prev => [...prev].sort((a, b) => b.range - a.range));
  };

  return (
    <div>
      <nav>
        <Link to="/">Notes</Link> | <Link to="/add">Add Note</Link>
      </nav>
      <h1>Notes App</h1>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <input
                type="text"
                placeholder="Search notes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button onClick={sortByPriority}>Sort by Priority</button>
              <NoteList notes={filteredNotes} deleteNote={deleteNote} />
            </>
          }
        />
        <Route path="/add" element={<NoteForm addNote={addNote} />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
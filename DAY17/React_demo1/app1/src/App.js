import { useState, useEffect } from "react";
import NoteForm from "./component/NoteForm";
import NoteList from "./component/NoteList";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

const API = "http://localhost:3001/notes";

function AppContent() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const location = useLocation();

  useEffect(() => {
    axios.get(API)
      .then(res => setNotes(res.data))
      .catch(err => console.error(err));
  }, []);

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.content.toLowerCase().includes(search.toLowerCase())
  );

  const addNote = (noteData) => {
    axios.post(API, {
      ...noteData,
      range: noteData.range ?? 50
    })
    .then(res => setNotes(prev => [...prev, res.data]));
  };

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(n => n.id !== id));
    axios.delete(`${API}/${id}`).catch(err => console.error(err));
  };

  const sortByPriority = () => {
    const sortedNotes = [...notes].sort((a, b) => b.range - a.range);
    setNotes(sortedNotes);
  };

  return (
    <div>
      <nav>
        <Link to="/">Notes</Link> | <Link to="/add">Add Note</Link>
      </nav>

      <h1>Notes App</h1>

      {location.pathname === "/" && (
        <>
          <input
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={sortByPriority}>
            Sort by Priority
          </button>
        </>
      )}

      <Routes>
        <Route path="/" element={<NoteList notes={filteredNotes} deleteNote={deleteNote} />} />
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
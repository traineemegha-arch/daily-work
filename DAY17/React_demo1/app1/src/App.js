import { useState, useEffect } from "react";
import NoteForm from "./component/NoteForm";
import NoteList from "./component/NoteList";
import axios from "axios";  
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const API = "http://localhost:8080/notes"; 

function AppContent() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
  const fetchNotes = async () => {
    try {
     const response = await axios.get(API);
      console.log(response.data);
    if (Array.isArray(response.data)) {
      setNotes(response.data);
    } else {
      setNotes(Object.values(response.data));
    }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  fetchNotes();
}, []);

  const filteredNotes = (notes || []).filter(note =>
  (note.title || "").toLowerCase().includes(search.toLowerCase()) ||
  (note.content || "").toLowerCase().includes(search.toLowerCase())
);

  const addNote = async (noteData) => {
  const response = await axios.post(API, noteData);
  setNotes(prev => [...prev, response.data]);
};

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(n => n.id !== id));
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

      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={sortByPriority}>Sort by Priority</button>

      <Routes>
        <Route
          path="/"
          element={<NoteList notes={filteredNotes} deleteNote={deleteNote} />}
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
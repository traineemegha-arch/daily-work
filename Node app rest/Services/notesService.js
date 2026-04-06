const fs = require("fs").promises;
const FILE = "./data/notes.json";

async function getNotes() {
  // const data = await fs.readFile(FILE, "utf-8");
  // return JSON.parse(data);
  try {
    const data = await fs.readFile(FILE, "utf-8");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    return [];
  }
}

async function getNoteById(id) {
  const notes = await getNotes();
  const note = notes.find((note) => note.id == id);
  return note;
}

async function createNote(title, content,time) {
  const notes = await getNotes();
  const now=new Date();
  const newNote = {
    id: Date.now(),
    title,
    content,
    time,
    status: "CREATED",
    createdAt: now.toISOString(), 
    day: now.toLocaleString("en-US", { weekday: "long" })
  };
  notes.push(newNote);
  await saveNotes(notes);
  return newNote;
}

async function saveNotes(notes) {
  await fs.writeFile(FILE, JSON.stringify(notes, null, 2));
}

async function deleteNote(id) {
  const notes = await getNotes();
  if (notes.findIndex(n => n.id == id) == -1) {
    return false;
  }
  const filtered = notes.filter((n) => n.id != id);
  await saveNotes(filtered);
  return true;
}


async function updateNote(id, { title, content, status,time}) {
  const notes = await getNotes();
  const note = notes.find(n => n.id == id);
  if (!note) return null;
  if (time) note.time = time;
  if (title) note.title = title;
  if (content) note.content = content;
  if (status) note.status = status;
  note.updatedAt = new Date().toISOString();
  await saveNotes(notes);
  return note;
}

module.exports = { getNotes, getNoteById, createNote, deleteNote, updateNote }; 
function NoteItem({ note, deleteNote }) {
  return (
    <li>
      {note.text}
      {" - "}
      <span>{note.content}</span>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </li>
  );
}

export default NoteItem;





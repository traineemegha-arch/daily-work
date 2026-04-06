function NoteItem({ note, deleteNote }) {
  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete this note?");
    if (confirmed) {
      deleteNote(note.id);
    }
  };

  return (
    <li>
      <span>{note.title}</span>
      {" - "}
      <span>{note.content}</span>
      {note.time && (
        <span> {note.time}</span>
      )}
      {note.createdAt && (
        <span> {new Date(note.createdAt).toLocaleString()}</span>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default NoteItem;
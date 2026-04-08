import NoteItem from "./NoteItem";

function NoteList({ notes, deleteNote, closeNote }) {
  return (
      <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
      <thead>
        <tr style={{ background: "#f5f5f5" }}>
          <th>S.no.</th>
          <th>Title</th>
          <th>Content</th>
          <th>Time</th>
          <th>Added On</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        {notes.map((note, i) => (
          <NoteItem key={note.id} note={note} index={i} deleteNote={deleteNote} closeNote={closeNote} />
        ))}
      </tbody>

     
    </table>
  );
}
export default NoteList;
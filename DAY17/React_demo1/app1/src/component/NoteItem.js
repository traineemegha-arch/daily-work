function NoteItem({ note, index, deleteNote,closeNote }) {
  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete this note?");
    if (confirmed) {
      deleteNote(note.id);
    }
  };

//   return (
//     <tr>
//       <td>{index + 1}</td>
//       <td>{note.title}</td>
//       <td>{note.content}</td>
//       <td>{note.time || "—"}</td>
//       <td>{note.createdAt ? new Date(note.createdAt).toLocaleString() : "—"}</td>
//       <td>{note.range ? `${note.range}%` : "—"}</td>
//       <tr className={note.status === "closed" ? "closed-row" : ""}></tr>
//       <td>
//         <button onClick={handleDelete}>Delete</button>
//       </td>
//     </tr>
    
//   );
// }
 return (
    <tr className={note.status === "closed" ? "closed-row" : ""}>
      <td>{index + 1}</td>
      <td>{note.title}</td>
      <td>{note.content}</td>
      <td>{note.time || "—"}</td>
      <td>{note.createdAt ? new Date(note.createdAt).toLocaleString() : "—"}</td>
      <td>{note.range}%</td>

      <td>
        <button onClick={() => closeNote(note.id)}>✔</button>
        <button onClick={handleDelete}>❌</button>
      </td>
    </tr>
  );
}


export default NoteItem;
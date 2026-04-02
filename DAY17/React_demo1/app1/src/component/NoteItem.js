function NoteItem({note,deleteNote}){
    return(
        <li>
           <span>{note.title}</span>
            <span>{note.status}</span>
            <button onClick={()=> deleteNote(note.id)}>Delete</button>
        </li>
    );
}
export default NoteItem;
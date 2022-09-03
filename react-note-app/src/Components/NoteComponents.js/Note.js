

function Note({id, text, delNote}){
    return(
        <div className="notesStyle">
            <div className="noteBody">{text}</div>
            <p
            className="deleteNoteBtn"
            onClick={() => delNote(id)}
            >Delete note</p>
        </div>
    )
}

export default Note;
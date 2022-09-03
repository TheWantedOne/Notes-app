import {useState, useEffect} from "react"
import CreateNote from "./createNote"
import Note from "./Note"
import { v4 as uuid } from "uuid"


function Notes() {

    //use this to store notes into local storage
    const[notes, setNotes] = useState([])
    //use this to add note text
    const[inputText, setInputText] = useState("")

    //get text and store it to inputText
    const textHandler = (e) => {
        setInputText(e.target.value)
    }

    //add note text to state array
    const saveNotes = () => {
        setNotes((prevNotes) => [
            ...prevNotes, {id: uuid, text: inputText}
        ])
        //clear the text area
        setInputText("")
    }

    //function for deleting the note based on the noteID
    const delNote = (id) => {
        const filterNotes = notes.filter((note) => note.id !== id)
        setNotes(filterNotes)
    }

    //add saved notes to array
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Notes"))
        if(data){
            setNotes(data)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("Notes", JSON.stringify(notes))
    }, [notes])

    return (
        <div className="notes">
            <CreateNote 
            textHandler={textHandler}
            saveNotes={saveNotes}
            inputText={inputText}
            />


                {notes.map((note) => (
                <Note 
                key={note.id}
                id={note.id}
                text={note.text}
                delNote={delNote}
                />
            ))}
        </div>
    )

}

export default Notes
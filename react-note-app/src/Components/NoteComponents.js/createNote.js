import "../css/Note.css"
import { LinearProgress } from "@mui/material";

function CreateNote({textHandler, saveNotes, inputText}){


    //declare the limit for note text
const charLimit = 100;
//on each keystore display how many charactres you've got left
const charLeft = charLimit - inputText.length

return(
    <div className="note">
        
        <textarea
        rows="4" 
        cols="50"
        className="styleTextArea"
        value={inputText}
        onChange={textHandler}
        placeholder="Type..."
        maxLength="100"
        ></textarea>

        <LinearProgress 
        className="styleLinearProgress"
        variant="determinate"
        value={charLeft}
        sx={{
            color:"white",
            height:"1em",
            "margin-top":"0.8em"
        }}
        />

        <div className="displayOptions">
            <p className="styleLeftChars">{charLeft}</p>
            <p className="saveNote" onClick={saveNotes}>Save note</p>
        </div>

    </div>
)


}




export default CreateNote
import React, { useState } from 'react'
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
    //setting a state 
    const [note, setNote] = useState({
        noteTitle: "",
        noteContent: ""
    });

    //to hanfle the input values
    function handleChange(event) {
        const { name, value } = event.target;
        console.log(name);
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    //to transfer the value to trigger adNote in app js 
    function submitNote(event) {
        //to prevent refresh
        event.preventDefault();
        //to trigger the adding note in the app.js
        props.onAdd(note);

        //setting state to empty after you press addNote
        setNote({
            noteTitle: "",
            noteContent: ""
        })
    }
    //rendering some output 
    return (
        <div>
            <form className='form'>

                <input
                    placeholder='Enter your ToDo'
                    name="noteTitle"
                    type='text'
                    onChange={handleChange}
                    value={note.noteTitle}
                    className='note-title'
                />
                <textarea
                    placeholder='Any Note?'
                    name="noteContent"
                    type='textarea'
                    onChange={handleChange}
                    value={note.noteContent}
                    className='note-area'
                />
                <Fab onClick={submitNote}>
                    <AddIcon className="add-icon" />
                </Fab>
            </form>
        </div>
    )
}

export default CreateArea

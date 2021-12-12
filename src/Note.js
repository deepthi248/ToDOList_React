import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
    function handleDelete() {
        props.onDelete(props.id);
    }
    return (
        <div className='notesRendering'>
            <h2>{props.noteTitle}</h2>
            <p>{props.noteContent}</p>
            <button onClick={handleDelete}>
                <DeleteIcon />
            </button>
        </div>
    )
}

export default Note

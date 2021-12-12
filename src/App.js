import './App.css';
import Header from './Components/Header';
import CreateArea from './Components/CreateArea';
import Note from './Components/Note';
import { useState } from 'react';
function App() {
  //using hook useState to add the notes into an array 
  const [notes, setNotes] = useState([]); //setting with an empty array

  //function to add a note to the array
  function AddNote(newNote) {
    setNotes(prevNote => {
      return [...prevNote, newNote]
    })

  }

  function deleteNote(id) {
    setNotes(prevNote => {
      console.log(prevNote)
      return prevNote.filter((note, index) => { console.log(index, id); return index !== id })

    })

  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={AddNote} />
      {
        notes.map((note, index) => {
          return (< Note
            noteTitle={note.noteTitle}
            key={index}
            id={index}
            noteContent={note.noteContent}
            onDelete={deleteNote}
          />)
        })
      }


    </div>
  );
}

export default App;

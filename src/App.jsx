import NewNote from "./components/NewNote";
import NotesList from "./components/NotesList";
import { useState } from "react";
import "../styles/App.sass";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notesdb");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  function addNote(newNote) {
    localStorage.setItem("notesdb", JSON.stringify([...notes, newNote]));
  }

  return (
    <main className="notes-main">
      <h1>Notees</h1>
      <div className="content">
        <NotesList notes={notes} setNotes={setNotes} />
        <NewNote notes={notes} setNotes={setNotes} addNote={addNote} />
      </div>
    </main>
  );
}

export default App;

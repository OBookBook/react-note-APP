import "./App.css";
import uuid from "react-uuid";
import { useState } from "react";
import Main from "./components/Main";
import { Note } from "./types/Note.d";
import Sidebar from "./components/Sidebar";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "note_title",
      content: "note_detail",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  const onDeleteNote = (id: string) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  return (
    <>
      <div className="App">
        <Sidebar
          onAddNote={onAddNote}
          notes={notes}
          onDeleteNote={onDeleteNote}
        />
        <Main />
      </div>
    </>
  );
}

export default App;

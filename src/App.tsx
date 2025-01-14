import "./App.css";
import uuid from "react-uuid";
import { useEffect, useState } from "react";
import { Note } from "./types/Note.d";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [notes, setNotes] = useState<Note[]>(
    JSON.parse(localStorage.getItem("notes") || "[]")
  );
  const [activeNote, setActiveNote] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    if (notes.length > 0) setActiveNote(notes[0].id);
  }, []);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "note_title",
      content: "",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  const onDeleteNote = (id: string) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onUpdateNote = (updatedNote: Note) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });
    setNotes(updatedNotesArray);
  };

  return (
    <>
      <div className="App">
        <Sidebar
          onAddNote={onAddNote}
          notes={notes}
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
        <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
      </div>
    </>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

type Note = {
  id: number;
  title: string;
  content: string;
  modDate: number;
};

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const onAddNote = () => {
    const newNote = {
      id: 1,
      title: "note_title",
      content: "note_detail",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  return (
    <>
      <div className="App">
        <Sidebar onAddNote={onAddNote} />
        <Main />
      </div>
    </>
  );
}

export default App;

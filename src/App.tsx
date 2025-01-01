import "./App.css";
import { useState } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [notes, setNotes] = useState([]);

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

import "./Main.css";
import Markdown from "react-markdown";
import { Note } from "../../types/Note";

type MainProps = {
  activeNote: Note | undefined;
  onUpdateNote: (updatedNote: Note) => void;
};

const Main = ({ activeNote, onUpdateNote }: MainProps) => {
  const onEditNote = (key: keyof Note, value: string) => {
    if (!activeNote) return;
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    });
  };

  if (!activeNote) {
    return <div className="no-active-note">Note is not selected</div>;
  }

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          id="title"
          type="text"
          value={activeNote.title}
          onChange={(e) => onEditNote("title", e.target.value)}
        />
        <textarea
          id="content"
          placeholder="Write note"
          value={activeNote.content}
          onChange={(e) => onEditNote("content", e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <Markdown className="markdown-preview">{activeNote.content}</Markdown>
      </div>
    </div>
  );
};

export default Main;

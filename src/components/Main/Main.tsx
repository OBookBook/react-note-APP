import "./Main.css";
import { Note } from "../../types/Note";

type MainProps = {
  activeNote: Note | undefined;
};

const Main = ({ activeNote }: MainProps) => {
  if (!activeNote) {
    return <div className="no-active-note">Node is not selected</div>;
  }

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" />
        <textarea placeholder="write note"></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">{activeNote.content}</div>
      </div>
    </div>
  );
};

export default Main;

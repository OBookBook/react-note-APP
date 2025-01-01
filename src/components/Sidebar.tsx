import "./Sidebar.css";
import { Note } from "../types/Note";

type SidebarProps = {
  onAddNote: () => void;
  notes: Note[];
};

const Sidebar = ({ onAddNote, notes }: SidebarProps) => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Note</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div className="app-sidebar-note">
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button>Delete</button>
            </div>
            <p>{note.content}</p>
            <small>
              {new Date(note.modDate).toLocaleDateString("ja-JP", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

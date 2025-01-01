import "./Main.css";

const Main = () => {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" />
        <textarea placeholder="write note"></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">Title</h1>
        <div className="markdown-preview">article</div>
      </div>
    </div>
  );
};

export default Main;

import { useState } from "react";
import styles from "../Pages/Notes.module.css";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");

  const handleAddNote = () => {
    setNotes([...notes, { title, content }]);
    setTitle("");
    setContent("");
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((note, i) => i !== index);
    setNotes(updatedNotes);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.notescontainer}>
      <div className={styles.inputscontainer}>
        <div className={styles.noteinputs}>
          <div className={styles.title}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div
            className={styles.editablenote}
            contentEditable
            placeholder="Write your note here..."
            onInput={(e) => setContent(e.target.textContent)}
          ></div>
          <button onClick={handleAddNote} className={styles.btn}>
            Add Note
          </button>
        </div>

        <input
          type="text"
          className={styles.searchbar}
          placeholder="Search Notes"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.notesgrid}>
        {filteredNotes.map((note, index) => (
          <div key={index} className={styles.note}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => handleDeleteNote(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./SearchNotes.module.css";

const SearchNotes = ({ notes }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      const searchResults = notes.filter((note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredNotes(searchResults);
    } else {
      setFilteredNotes([]);
    }
  }, [searchQuery, notes]);

  return (
    <div className="search-notes-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredNotes.length > 0 ? (
        <div className="notes-results">
          {filteredNotes.map((note, index) => (
            <div key={index} className="note-result">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
            </div>
          ))}
        </div>
      ) : (
        searchQuery.trim() && <p className="no-results">No notes found</p>
      )}
    </div>
  );
};

// Adding PropTypes for validation
SearchNotes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SearchNotes;

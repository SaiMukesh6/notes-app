import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('https://notes-app-yuv8.onrender.com/notes')
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.error("Failed to fetch notes:", err));
  }, []);

  return (
    <div className="App">
      <h1>📝 My Notes</h1>
      {notes.length === 0 ? (
        <p>Loading notes...</p>
      ) : (
        <ul>
          {notes.map((note, index) => (
            <li key={index} style={{ marginBottom: '20px', textAlign: 'left' }}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

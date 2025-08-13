import { useState } from "react";
import NoteForm from "./NoteForm";
import Note from "./Note";
import "./App.css";

function generateId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export default function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    console.log("[App] addNote called with:", text);
    setNotes((prev) => [
      { id: generateId(), text, createdAt: new Date().toISOString() },
      ...prev,
    ]);
  };

    const deleteNote = (id) => {
      setNotes((prev) => prev.filter((note) => note.id !== id));
    };

    return (
      <div className="container">
        <h1>Quick Notes</h1>
        <NoteForm onAdd={addNote} />
        <section className="grid">
          {notes.length === 0 && <p className="empty">No notes yet.</p>}
          {notes.map((note) => (
            <Note key={note.id} note={note} onDelete={deleteNote} />
          ))}
        </section>
      </div>
    );
}

import { useState } from "react";
import "./NoteForm.css";

export default function NoteForm({ onAdd }) {
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) {
      console.log("[NoteForm] Ignored empty/whitespace note");
      return;
    }
    console.log("[NoteForm] Submitting:", trimmed);
    onAdd(trimmed);
    setText("");
  };

  return (
    <form onSubmit={submit} className="note-form">
      <label htmlFor="note">Add a note</label>
      <textarea
        id="note"
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your note here…"
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

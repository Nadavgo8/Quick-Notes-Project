import { dayjs } from "./lib/dayjs";
import "./Note.css";

export default function Note({ note, onDelete }) {
  const formattedDate = dayjs(note.createdAt).format("MMM Do h:mm A");

  const deleteNote = () => {
    if (confirm("Are you sure you want to delete your note?")) {
      onDelete(note.id);
    }
  };

  return (
    <article className="note-card">
      <button
        className="note-delete"
        onClick={deleteNote}
        aria-label="Delete note"
        title="Delete note"
      >
        ×
      </button>

      <p className="note-text">{note.text}</p>
      <time className="note-date" dateTime={note.createdAt}>
        {formattedDate}
      </time>
    </article>
  );
}

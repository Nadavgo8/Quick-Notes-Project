import { dayjs } from "./lib/dayjs";

export default function Note({ note, onDelete }) {
  const formattedDate = dayjs(note.createdAt).format("MMM Do h:mm A");
  // "MMM" = Aug, "Do" = 31st, "h:mm A" = 12:30 PM
  const deleteNote = () => {
    if (confirm("Are you sure you want to delete your note?")) {
      onDelete(note.id);
    }
  };

  return (
    <article className="note-card">
      <button onClick={deleteNote}>X</button>
      <p className="note-text">{note.text}</p>
      <time className="note-date" dateTime={note.createdAt}>
        {formattedDate}
      </time>
    </article>
  );
}

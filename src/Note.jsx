export default function Note({ note }) {
  const date = new Date(note.createdAt).toLocaleString();
  return (
    <article className="note-card">
      <p className="note-text">{note.text}</p>
      <time className="note-date" dateTime={note.createdAt}>
        {date}
      </time>
    </article>
  );
}

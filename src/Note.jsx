import { dayjs } from "./lib/dayjs";

export default function Note({ note }) {
  const formattedDate = dayjs(note.createdAt).format("MMM Do h:mm A");
  // "MMM" = Aug, "Do" = 31st, "h:mm A" = 12:30 PM

  return (
    <article className="note-card">
      <p className="note-text">{note.text}</p>
      <time className="note-date" dateTime={note.createdAt}>
        {formattedDate}
      </time>
    </article>
  );
}

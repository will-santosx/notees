import { IoTrash } from "react-icons/io5";
import "../../styles/components/NotesList.sass";

const NotesList = ({ notes, setNotes }) => {
  function deleteNote(index) {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
    localStorage.setItem("notesdb", JSON.stringify(newNotes));
  }

  return (
    <div className="notes-list-container">
      <h3>Suas anotações</h3>
      <ul id="notes-list">
        {notes.map((item, index) => (
          <li
            style={{ backgroundColor: `${item.color}` }}
            key={item.title}
            id={`note-${index}`}
          >
            <h4>{item.title}</h4>
            <p>{item.text}</p>
            <button
              onClick={() => deleteNote(index)}
              className="list-delete-button"
            >
              <IoTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;

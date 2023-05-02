import "../../styles/components/NewNote.sass";

const NewNote = ({ notes, setNotes, addNote }) => {

  const notesRandomColors = [
    "#EEC1D8",
    "#C6B3FA",
    "#F1C6A4",
    "#B2D5DE",
    "#FFF4AC",
    "#B2DECD",
  ];

  function addNewNote(event) {
    event.preventDefault();

    let noteName = document.getElementById("input-note-name").value;
    let noteText = document.getElementById("text-note").value;

    const noteColor = () => notesRandomColors[Math.floor(Math.random() * notesRandomColors.length)];

    if (notes.some((note) => note.title === noteName)) {
      alert("Já existe uma anotação com esse nome!");
      return;
    }

    const newNote = { title: noteName, text: noteText, color: noteColor() };
    setNotes([...notes, newNote]);
    addNote(newNote);

    document.getElementById("input-note-name").value = "";
    document.getElementById("text-note").value = "";
  }

  return (
    <form onSubmit={addNewNote}>
      <input
        required
        id="input-note-name"
        minLength={2}
        maxLength={26}
        autoComplete="off"
        type="text"
        placeholder="Nome da anotação"
      />
      <textarea
        id="text-note"
        minLength={3}
        maxLength={200}
        required
        placeholder="Anotação"
      />
      <button type="submit">FINALIZAR</button>
    </form>
  );
};

export default NewNote;

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((previous) => {
      return [...previous, note];
    });
  }

  function deleteNote(id) {
    event.preventDefault();
    setNotes((previous) => {
      return previous.filter((element, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            delete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

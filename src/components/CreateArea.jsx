import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewNote((prevVal) => {
      return { ...prevVal, [name]: value };
    });
  }

  function submitNote(event) {
    props.onAdd(newNote);
    setNewNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={newNote.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
        />
        <button onClick={submitNote} value={newNote}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;

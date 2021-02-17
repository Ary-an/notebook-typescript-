import React, { ChangeEvent, FC, FormEvent, useState } from "react";


interface PROPS {
  addNote(note: string): void;
}

const AddNoteBook: FC<PROPS> = ({ addNote }) => {
  const [note, setNote] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNote(note);
    setNote("");
  };

  return (
    <form className="notebook__form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="type something..."
        value={note}
        onChange={handleChange}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default AddNoteBook;

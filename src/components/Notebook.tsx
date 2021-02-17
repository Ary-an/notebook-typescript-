import React, { FC } from "react";
import AddNoteBook from "./AddNoteBook";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../redux/reducer";
import { addNoteAction, removeNoteAction } from "../redux/action";

const NoteBook: FC = () => {
  const notes = useSelector<State, State["notes"]>(state => state.notes);
  const dispatch = useDispatch();

  const addNote = (note: string) => {
    dispatch(addNoteAction(note));
  };

  const removeNote = (note: string) => {
    dispatch(removeNoteAction(note));
  };

  return (
    <div className="notebook__wrapper">
      <AddNoteBook addNote={addNote} />
      {
        <ul className="notebook__list">
          <li>Notes</li>
          {notes.map(note => (
            <li key={note}>
              {note} <button onClick={() => removeNote(note)}> X</button>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default NoteBook;

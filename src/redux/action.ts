export enum ActionTypes {
    ADD_NOTE = "ADD_NOTE",
    REMOVE_NOTE = "REMOVE_NOTE"
  }
  
  export interface Action {
    type: ActionTypes;
    payload: string;
  }
  
  export const addNoteAction = (note: string) => ({
    type: ActionTypes.ADD_NOTE,
    payload: note
  });
  
  export const removeNoteAction = (note: string) => ({
    type: ActionTypes.REMOVE_NOTE,
    payload: note
  });
  
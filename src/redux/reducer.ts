import { ActionTypes } from "./action";
import { Action } from "./action";

export interface State {
  notes: string[];
}

const initialState: State = {
  notes: []
};

export const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.ADD_NOTE:
      return { ...state, notes: [action.payload, ...state.notes] };

    case ActionTypes.REMOVE_NOTE:
      const filteredData = state.notes.filter(note => note !== action.payload);

      return { ...state, notes: filteredData };

    default:
      return state;
  }
};

import { ADD_NOTE, REMOVE_NOTE, addNote } from "../actions/noteActions";

const initialState = { notes: [] };
function noteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE: {
      state.notes.push({ text: action.text, createdOn: new Date() });

      return {
        ...state,
        notes: [...state.notes],
      };
    }
    case REMOVE_NOTE: {
      state.notes.splice(action.index, 1);
      console.log(state.notes);
      return {
        ...state,
        notes: [...state.notes],
      };
    }
    default:
      return state;
  }
}
export { noteReducer };

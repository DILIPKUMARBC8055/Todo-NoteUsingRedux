const ADD_NOTE = "add note";
const REMOVE_NOTE = "remove note";

const addNote = (text) => ({ text, type: ADD_NOTE });
const removeNote = (index) => ({ index, type: REMOVE_NOTE });

export { ADD_NOTE, addNote, REMOVE_NOTE, removeNote };

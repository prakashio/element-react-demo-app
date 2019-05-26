import { connect } from "react-redux";
import { addNote } from "./Store/actions";
import AddForm from "./components/AddForm";
import List from "./components/List";

export const AddNewNote = connect(
  null,
  dispatch => ({
    onNewNote(note, rating) {
      dispatch(addNote(note, rating));
    }
  })
)(AddForm);

export const NoteList = connect(state => ({
  notes: state.notes
}))(List);

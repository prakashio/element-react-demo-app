import React from "react";
import { Button, Layout } from "element-react";
import { addNote } from "../Store/actions";
import PropTypes from "prop-types";

function AddForm(props) {
  let _note;

  const add = e => {
    e.preventDefault();
    const { onNewNote } = props;
    onNewNote(_note.value);
    _note.value = ''
    _note.focus()
  };

  return (
    <Layout.Col span="24">
      <div className="grid-content p-4">
        <p>Enter the note</p>
        <form>
          <div className="form-group">
            <textarea
              className="form-control"
              ref={input => (_note = input)}
              rows="6"
            />
          </div>
          <div className="form-group">
            <Button onClick={add} type="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    </Layout.Col>
  );
}

export default AddForm;
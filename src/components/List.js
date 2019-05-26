import React from "react";
import NoteRate from "./NoteRate";

function List({ notes }) {
  return notes.map((note, i) => (
    <div className="card mb-3 bg-primary" key={i}>
      <div className="card-body">
        <p className="lead">{note.note}</p>
        <NoteRate rating={note.rating} />
      </div>
    </div>
  ));
}

export default List;

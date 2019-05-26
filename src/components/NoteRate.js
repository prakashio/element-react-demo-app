import React from "react";
import { Rate } from "element-react";

function NoteRate({ rating, store }) {
  const rateNote = value => {
    console.log(value);
  };

  return (
    <span className="wrapper">
      <Rate
        onChange={rateNote}
        value={rating}
        colors={["#99A9BF", "#F7BA2A", "#FF9900"]}
      />
    </span>
  );
}

export default NoteRate;

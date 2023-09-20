import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Note = ({ notes, deleteNote, editNote }) => {

  
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  // console.log(formatAMPM(new Date()));

  return (
    <>
      {notes.map((note) => {
        const { id, text, date } = note;
        return (
          <div className="note p-2 flex-nowrap" key={id}>
            <span className="p-2">{text}</span>
            <div className="note-footer p-2">
              <small className="lol" >{formatAMPM(new Date())}</small>
              <small className="lol">{date}</small>
              <div className="icons flex gap-1">
                <MdDeleteForever
                  onClick={() => deleteNote(id)}
                  className="delete-icon"
                  size="1.5em"
                />
                <FaEdit
                  onClick={() => editNote(id)}
                  size="1.5em"
                  className="edit-icon"
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Note;

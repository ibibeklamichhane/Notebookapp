import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;


  
  return (
   
    <div className=" col-md-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
           
            {note.title}
            <i
              className="fa fa-trash-alt mx-2"
              onClick={() => {
                deleteNote(note._id);
              }}
            ></i>
            <i className="fa fa-pencil-square-o mx-2" onClick={()=>{updateNote(note)}}></i>
          </h5>

          <p className="card-text">{note.description.substring(0, 30)}</p>
          <p className="card-text">{note.tag}</p>
        </div>
      </div>
    </div>
   
  );
};

export default NoteItem;

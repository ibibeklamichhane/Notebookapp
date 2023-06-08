import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //Get all Notes
  const getNotes = async () => {
    //API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem("token"),
        
          
      },
    });

    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //Add Notes
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlNzE0MTE4ZDMyMGUwNDE5ZWVjMGY4In0sImlhdCI6MTY3NjA4ODYyMH0.k9Q90VyI0NEiRVodH__S8zTVBHjWcl3tVUYRVH6ceuM",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    console.log(json)
    
    console.log("Adding a new note");

    const note = {
      _id: "63e715708d320e0419eec0fc",
      user: "63e714118d320e0419eec0f8",
      title: title,
      description: description,
      tag: "personal222",
      date: "2023-02-11T04:11:28.050Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a NOte
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlNzE0MTE4ZDMyMGUwNDE5ZWVjMGY4In0sImlhdCI6MTY3NjA4ODYyMH0.k9Q90VyI0NEiRVodH__S8zTVBHjWcl3tVUYRVH6ceuM",
      },
    });
    const json = response.json();
    console.log(json);

    //TODO:API call

    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit the Notes

  const editNote = async (id, title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlNzE0MTE4ZDMyMGUwNDE5ZWVjMGY4In0sImlhdCI6MTY3NjA4ODYyMH0.k9Q90VyI0NEiRVodH__S8zTVBHjWcl3tVUYRVH6ceuM",
      },

      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    console.log(json)
   
     let newNotes =JSON.parse(JSON.stringify(notes))
    //Logic for edit in the client side

    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, getNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

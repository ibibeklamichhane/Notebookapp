import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "https://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //Get all Notes
  const getNotes = async () => {
    //API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", 

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjMjk2NzNmYmE3ZGUwODMxZjUzMmY0In0sImlhdCI6MTY3MzcwMzA0Nn0.6dqLPU9BUGQZAIGAUiJQI3KlWzpUo9oBvts3jkOnYMg"
      } 
    });

    const json = await response.json()
    console.log(json);
    //setNotes(json);
  }

    //Add Notes
    const addNote = async (title, description, tag) => {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.

        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjMjk2NzNmYmE3ZGUwODMxZjUzMmY0In0sImlhdCI6MTY3MzcwMzA0Nn0.6dqLPU9BUGQZAIGAUiJQI3KlWzpUo9oBvts3jkOnYMg",
        },
        body: JSON.stringify({ title, description, tag }),
      });

      console.log("Adding a new note");

      const note = {
        _id: "63ca22e3957456a4963093d9",
        user: "63c29673fba7de0831f532f4",
        title: title,
        description: description,
        tag: "youtube2",
        date: "2023-01-20T05:13:07.885Z",
        __v: 0,
      };
      setNotes(notes.concat(note));
    };

    //Delete a NOte
    const deleteNote = (id) => {
      //TODO:API call
      console.log("Deleting the note with the id" + id);
      const newNote = notes.filter((note) => {
        return note._id !== id;
      });
      setNotes(newNote);
    };

    //Edit the Notes

    const editNote = async (id,title,description,tag) => {
      //API CALL
      const response = await fetch(
        `${host}/api/notes/updatenote/${id}`,
        {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjMjk2NzNmYmE3ZGUwODMxZjUzMmY0In0sImlhdCI6MTY3MzcwMzA0Nn0.6dqLPU9BUGQZAIGAUiJQI3KlWzpUo9oBvts3jkOnYMg",
          },

          body:JSON.stringify({ title, description,tag }),
        }
      );
      const json = response.json();

      //Logic for edit in the client side

      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if (element._id === id) {
          element.title = title;
          element.description = description;
          element.tag = tag;
        }
      }
    };

    return (
      <NoteContext.Provider
        value={{ notes, getNotes, addNote, deleteNote,editNote }}
      >
        {props.children}
      </NoteContext.Provider>
    );
  };

export default NoteState;

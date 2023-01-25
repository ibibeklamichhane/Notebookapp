import  NoteContext from './noteContext'
import {useState} from 'react';

const NoteState = (props) => {

    /*hard coding the notes */
   const notesInitial = [
 {
      "_id": "63c791868e5919865d25aebb",
      "user": "63c29673fba7de0831f532f4",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-01-18T06:28:22.018Z",
      "__v": 0
    },
    {
      "_id": "63c92057f056e900254db273",
      "user": "63c29673fba7de0831f532f4",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-01-19T10:49:59.252Z",
      "__v": 0
    },
    {
      "_id": "63c971d516ffccd64bf8e8e7",
      "user": "63c29673fba7de0831f532f4",
      "title": "My Title2",
      "description": "Please wake up early2",
      "tag": "personal2",
      "date": "2023-01-19T16:37:41.248Z",
      "__v": 0
    },
    {
      "_id": "63ca22e3957456a4963093d9",
      "user": "63c29673fba7de0831f532f4",
      "title": "My Title2 updated2",
      "description": "Please wake up early updated2",
      "tag": "youtube2",
      "date": "2023-01-20T05:13:07.885Z",
      "__v": 0
    }
  ] 

  const [notes,setNotes]= useState(notesInitial)

    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
        )
}
export default NoteState;
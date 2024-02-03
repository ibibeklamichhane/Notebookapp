import React,{useContext,useState} from 'react'
import NoteContext from "../context/notes/noteContext";


const AddNote = ()=> {
    
    const context = useContext(NoteContext);

    const {addNote}= context;

    const [note,setNote]=useState({title : "",description:"",tag:"default"})

    const handleClick = (e) => {
       e.preventDefault();
        addNote(note.title,note.description,note.tag);
       setNote({title : "",description:"",tag:"default"})
    }
    const onChange = (e) => {
      setNote({...note,[e.target.name]: e.target.value})
    }
  
    return (
      <div className="container my-3 d-flex justify-content-center align-items-center">
        <div className="card   p-4  bg-secondary text-white custom-card "  > {/* Adjust the max-width as needed */}
          <h1 className="text-center mb-4">Add a Note</h1>
    
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" placeholder='Give a title' className="form-control" id="title" name="title" aria-describedby="title" onChange={onChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
              rows="5"
               type="text" placeholder="Add Description" className="form-control" id="description" name="description" onChange={onChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">Tag</label>
              <input type="text" placeholder="Add a tag" className="form-control" id="tag" name="tag" onChange={onChange}/>
            </div>
    
            <button type="submit" className="btn btn-success" onClick={handleClick}>Add Notes</button>
          </form>
        </div>
      </div>
    );
    
    
    
}
export default AddNote;
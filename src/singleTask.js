import { useState } from "react";
import './singleTask.css';

function SingleTask({handleDelete, name, index, handleUpdate}) {

  // useState
  const [isDone, setDone] = useState(false);
  const [isEditable, setEditable] = useState(false);
  const [txt, setTxt] = useState(name)

  // Handle done task
  const handleDone = () => {
      setDone(!isDone);
  }

  // Handle done task
  const handleEdit = () => {
    setEditable(!isEditable);
  }

  const UpdateData = (e) => {
    if(isEditable) {
      handleUpdate(e, txt, index)
      setEditable(!isEditable)
      alert('Update Successfully!')
    }
  }

  return (
    <form className="single-task" onSubmit={ UpdateData }>
        <input 
            type="text" 
            className = { isDone ? 'task-name  deleted-text' : 'task-name' } 
            value={txt}
            onChange={(e) => {setTxt(e.target.value)}} 
            disabled = { isEditable ? '' : 'disabled'}
        />

        <div className="action">
            
            <div title="Save" className = "save" onClick={ UpdateData }>
                <i className="fa-solid fa-floppy-disk"></i>
            </div>
            
            <div 
              title = { isEditable ? "Edit Mode: On" : "Edit Mode: Off" }
              className = "edit" 
              onClick = { handleEdit }
            >
                <i className="fa-solid fa-pen"></i>
            </div>

            <div title="Done" className="tick" onClick={ handleDone }>
                <i className="fa-solid fa-check"></i>
            </div>

            <div title="Delete" className="delete" onClick={ () => handleDelete(index) }>
                <i className="fa-solid fa-trash"></i>
            </div>    
        </div>
    </form>
  );  
}

export default SingleTask;

import './singleTask.css';

function singleTask({handleDelete, name, index}) {

  return (
    <div className="single-task">
        <div className="task-name">
            {name}
        </div>

        <div className="action">
            <div className="tick">
                <i className="fa-solid fa-check"></i>
            </div>

            <div className="delete" onClick={()=>handleDelete(index)}>
                <i className="fa-solid fa-trash"></i>
            </div>    
        </div>
    </div>
  );  
}

export default singleTask;

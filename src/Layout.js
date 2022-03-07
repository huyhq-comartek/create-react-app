/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line jsx-a11y/anchor-is-valid

import './Layout.css';
import './Input.css';
import SingleTask from './singleTask';
import {useState} from 'react';

function Layout() {
  // useState 
  const [txts, setTxts] = useState([]);
  const [txt, setTxt] = useState('');

  function handleDelete(index){
    setTxts((prev)=>{
      const newTxts=[...prev];
      newTxts.splice(index, 1);
      return newTxts;
    })
    console.log(txts);
    //
  }

  // handle submit 
  function handleSubmit (e) {
    e.preventDefault()
    if (txt === "") {
      alert("Fill the input first!")
    }else{
      addTask(txt)
    }
    setTxt("")
  }

  // add task
  function addTask() {
    const newtexts = [...txts, txt]
    setTxts(newtexts)
  }

  return (
    <div id="layout">
      <header>To-Do List</header>
      <div id="input">
      <form id="input-text" onSubmit={handleSubmit}>
        <input type="text" name="text" onChange={(e) => {setTxt(e.target.value)}} value={txt} />
        <a onClick={handleSubmit} id="plus-icon">
          <i className="fa-solid fa-square-plus"></i>
        </a>
      </form>

        <div id="input-type">
          <div id="selected-item">
            <span>All</span>  
            <div className="toggle-down">
              <i className="fa-solid fa-caret-down"></i>
            </div>
          </div>
          <ul id="list-item">
            <li className='item'>Item 1</li>
            <li className='item'>Item 2</li>
            <li className='item'>Item 3</li>
            <li className='item'>Item 4</li>
          </ul>
        </div>
      </div>

      {txts.map((t, index) => <SingleTask name={t} handleDelete={handleDelete} key={index} index={index}/>)}
    </div>
  );
}

export default Layout;
import { useState } from 'react';
import './model.css';

function Model() {
  const [txt, setTxt] = useState('');

  const notReload = (e) => {
    e.preventDefault()
    console.log(txt);
  }

  return (
    <div id="model__layout">
        <form id='model' onSubmit={notReload}>
            <label htmlFor='model__input'>Update: </label>
            <input type="text" id="model__input" onChange={(e) => {setTxt(e.target.value)}} value={txt}/>
        </form>
    </div>
  );
}

export default Model;
import React from 'react';

export default function Query({ inputValue, changeHandler, handleButtonClick }) {
  return <div>
    <input type="text" value={inputValue} onChange={(e) => changeHandler(e.target.value)} placeholder="Search Pokemon"></input>
    <button onClick={handleButtonClick}>Search</button>
  </div>;
}

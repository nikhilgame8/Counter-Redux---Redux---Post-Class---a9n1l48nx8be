import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { incNumber, decNumber} from '../actions/action'

function App() {
  const count = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch();

  return (
    <div id='main'>
      <h1 data-testid='counter'>{count}</h1>
      <button id='decrement' onClick={()=>dispatch(incNumber())}>+</button>
      <button id='increment' onClick={()=>dispatch(decNumber())}>-</button>
    </div>
  );
}

export default App;

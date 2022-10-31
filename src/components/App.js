import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { INCREMENT, DECREMENT} from '../actions/action'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <div id='main'>
      <h1 data-testid='counter'>{count}</h1>
      <button id='decrement' onClick={()=>dispatch(INCREMENT())}>+</button>
      <button id='increment' onClick={()=>dispatch(DECREMENT())}>-</button>
    </div>
  );
}

export default App;

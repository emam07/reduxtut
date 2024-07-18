import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index.js';

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Increment/Decrement</h1>
      <h4>Using React Redux</h4>

      <div className="quantity">
        <a className="quantity_minus" title="decrement" onClick={() => dispatch(decNumber())}>
          <span>-</span>
        </a>
        <input
          name="quantity"
          type="text"
          className="quantity_input"
          value={myState}
          readOnly
        />
        <a className="quantity_plus" title="increment" onClick={() => dispatch(incNumber())}>
          <span>+</span>
        </a>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import React from 'react';
import Table from './components/Table'

import { increament, decreament, reset,increamentClick,onlyIncreamen} from './actions'

function App() {
  const count = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const click = useSelector(state => state.click)
  const dispatch = useDispatch()
  return (
    <React.Fragment>
      {isLogged && <h3>Valuable information only visible to users logged in</h3>}
      <div className="App">
        <h1>count: {count}</h1>
        <button className="shah4" onClick={() => dispatch(increament(5))}>Increament</button>
        <button className="shah4" onClick={() => dispatch(decreament())}>Decreament</button>
        <button className="shah4" onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <span className="shah">
      {
        click%2==0 ? <button className="shah2" onClick={()=>dispatch(increamentClick())}>Show Posts</button> : <button className="shah2" onClick={()=>dispatch(onlyIncreamen())}>Hide Posts</button>
      }
      </span>
      <div className="shah">
        {click%2!=0 && <Table/>}
      </div>
    </React.Fragment>
  );
}

export default App;

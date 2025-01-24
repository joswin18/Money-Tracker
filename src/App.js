// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// require('dotenv').config();

function App() {
  const [name, setName] = useState('');
  const [datetime,setDateTime] = useState('')
  const [description,setDescription] = useState('')
  function addNewtransaction(ev){
    ev.preventDefault()
    const url = process.env.REACT_APP_API_URL+'/transaction'
    // console.log(url)
    fetch(url, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({name, description, datetime})
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(json => {
      console.log('result', json);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
  }

  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewtransaction}>
        <div>
        <input type='text' 
        value={name}
        onChange={ev => setName(ev.target.value)}
        placeholder={'laptop'}/>
        <input 
        value={datetime} 
        onChange={ev =>setDateTime(ev.target.value)}
        type='datetime-local'/>
        </div>
        <div 
        value={description} 
        onChange={ev =>setDescription(ev.target.value)}
        className='description'> 
        <input type='text' placeholder={'description'}/>
        </div>
        <button type='submit'>
          Add New Transaction
        </button>
      </form>
      <div className='transactions'>
      <div class="transaction">
        <div class="left">
          <div class="name">Samsung TV</div>
          <div class="description">Time to upgrade my living room setup!</div>
        </div>
        <div class="right">
          <div class="price red">-$500</div>
          <div class="datetime">2025-01-05</div>
        </div>
      </div>
      <div class="transaction">
        <div class="left">
          <div class="name">Phone</div>
          <div class="description">Bought new phone</div>
        </div>
        <div class="right">
          <div class="price green">+$900</div>
          <div class="datetime">2025-01-05</div>
        </div>
      </div>

      </div>
    </main>
  );
}

export default App;

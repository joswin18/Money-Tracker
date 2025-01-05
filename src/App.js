import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <h1>$400 <span>.00</span></h1>
      <form>
        <div>
        <input type='text'placeholder={'laptop'}/>
        <input type='datetime-local'/>
        </div>
        <div className='description'>
        <input type='text' placeholder={'description'}/>
        </div>
        <button type='submit'>
          Add New Transaction
        </button>
      </form>
      <div className='transactions'>
          <div className='Transaction'>
            <div className="left">
              <div className="name">new Samsung tv</div>
              <div className="description">time to buy new tv</div>
            </div>
            <div className="right">
              <div className="price">$500</div>
              <div className="datetime">2025-1-5</div>
            </div>
          </div>
      </div>
    </main>
  );
}

export default App;

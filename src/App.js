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
            </div>
            <div className="right">

            </div>
          </div>
      </div>
    </main>
  );
}

export default App;

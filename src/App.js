import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
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
      <div class="transaction">
        <div class="left">
          <div class="name">Samsung TV</div>
          <div class="description">Time to upgrade my living room setup!</div>
        </div>
        <div class="right">
          <div class="price">$500</div>
          <div class="datetime">2025-01-05</div>
        </div>
      </div>

      </div>
    </main>
  );
}

export default App;

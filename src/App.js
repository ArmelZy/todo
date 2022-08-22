import './App.css';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        <div>
          <Form/>
        </div>
      </div>
    </div>
  );
}

export default App;

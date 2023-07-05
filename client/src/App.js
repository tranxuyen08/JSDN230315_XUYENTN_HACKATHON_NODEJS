import './App.css';
import Header from './components/Header';
import FormAdd from './components/todoForm';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container my-3">
        <FormAdd />
      </div>

    </div>
  );
}

export default App;

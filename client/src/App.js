import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tables from './components/Tables';
import { useState } from 'react';

function App() {
  const [editData, setEditData] = useState(null)
  const handleSetData = (data) =>{
    setEditData(data)
  }
  return (
    <div className="content">
     <Header editData={editData}/>
     <Tables handleSetData={handleSetData}/>
    </div>
  );
}

export default App;

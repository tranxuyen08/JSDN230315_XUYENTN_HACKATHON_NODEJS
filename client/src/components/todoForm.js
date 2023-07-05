import React, { useEffect, useState } from 'react'
import ValueTodo from './ValueTodo'
import axios from 'axios'
export default function FormAdd() {
  const [note, setNote] = useState("")
  const [dataNote, setDataNote] = useState()
  const handleInputNote = (e) => {
    setNote(e.target.value)
  }

  const getTodo = () => {
    axios.get('http://localhost:8000/api/v1/todo')
      .then(response => {
        console.log(response.data);
        setDataNote(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (note) {
      const addNote = {
        title: note
      };
      axios.post('http://localhost:8000/api/v1/todo/create', addNote)
        .then(response => {
          console.log(response.data);
          getTodo()
          setNote('');
        })
        .catch(errors => {
          console.error(errors);
        })
    }
  };
  useEffect(() => {
    getTodo()
  }, [])
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title title">Title</h5>
          <form onSubmit={handleSubmit} method='POST' action='/create'>
            <input onChange={handleInputNote} value={note} className='input-note' type='text' placeholder='Take a note...' />
            {<button type="submit" className='btn-add'>+</button>}
          </form>
        </div>
      </div>
      <div className='value-wrapper'>
        <ValueTodo dataNote={dataNote} getTodo={getTodo}/>
      </div>
    </>
  );
}
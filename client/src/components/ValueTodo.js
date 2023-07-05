import React, { useEffect, useState } from 'react';
import axios from 'axios'

const ValueTodo = ({ dataNote,getTodo }) => {
  const [newData,setNewData] = useState()

  if (!dataNote || dataNote.length === 0) {
    return (
      <div className='card-value'>
        <p>Data Note is empty</p>
      </div>
    );
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/v1/todo/${id}`)
      .then(response => {
        console.log(response.data);
        getTodo();
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <>
      {dataNote.map((item) => (
        <div className='card-value'>
          <div key={item.id}>
            <p>{item.title}</p>
            <button onClick={() => handleDelete(item.id)} className='btn-delete'>
              <i className="fa-solid fa-trash" style={{ color: '#c4c420' }}></i>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ValueTodo;

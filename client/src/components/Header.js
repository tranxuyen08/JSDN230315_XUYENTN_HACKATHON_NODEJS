import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Header = ({ editData }) => {
  console.log(111111, editData);
  const [task, setTask] = useState({});
  const [content, setContent] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('');
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');
  const [method, setMethod] = useState('POST')
  const [action, setAction] = useState()
  const [data,setData] = useState()
  const getTasks = () => {
    axios.get('http://localhost:8000/api/v1/taskKeeper')
      .then(response => {
        console.log(response.data);
        setData(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }
  const handleChangeInput = (e) => {
    setContent(e.target.value);
  };

  const handleChangeDueDate = (e) => {
    setDueDate(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMethod("POST")
    setAction('/create')
    if (!content || !dueDate || !status || !userName) {
      setError('Please fill in all fields');
      return;
    }
    const newTask = {
      content,
      dueDate,
      status,
      userName,
    };
    setTask(newTask);
    axios.post('http://localhost:8000/api/v1/taskKeeper/create', newTask)
      .then(response => {
        console.log(response.data);
        getTasks()
        setContent('');
        setDueDate('');
        setStatus('');
        setUserName('');
        setError('');
      })
      .catch(errors => {
        console.error(errors);
      })
  };
  useEffect(() => {
    if (editData != null) {
      setContent(editData.content);
      setDueDate(editData.dueDate);
      setStatus(editData.status);
      setUserName(editData.userName);
    }
  }, [editData])
  const handleEdit = () => {
    const newData = {
      content,
      dueDate: dueDate.slice(0, 10),
      status,
      userName,
    };
    axios.patch(`http://localhost:8000/api/v1/taskKeeper/${editData.id}`, newData)
      .then(response => {
        console.log(response.data);
        getTasks()
        setContent('');
        setDueDate('');
        setStatus('');
        setUserName('');
        setError('');
      })
      .catch(errors => {
        console.error(errors);
      })
  }
  useEffect(() => {
    getTasks()
  }, [])
  return (
    <div className='wrapper-form'>
      <form className='form' method={method} action={action} onSubmit={handleSubmit}>
        <ul className='list-content-form'>
          <li className='item-content-form'>
            <label>@</label>
            <input
              onChange={handleChangeInput}
              type='text'
              value={content}
              name='content'
              placeholder='Enter your content'
            />
          </li>
          <li className='item-content-form'>
            <label>@</label>
            <input
              onChange={handleChangeDueDate}
              type='date'
              value={dueDate}
              name='dueDate'
            />
          </li>
          <li className='item-content-form'>
            <label>@</label>
            <select name='status' value={status} onChange={handleChangeStatus}>
              <option value=''>Choose</option>
              <option value='1'>Pending</option>
              <option value='2'>Reject</option>
              <option value='3'>Fulfill</option>
            </select>
          </li>
          <li className='item-content-form'>
            <label>@</label>
            <input
              onChange={handleChangeUserName}
              type='text'
              value={userName}
              name='userName'
              placeholder='Enter your user name'
            />
          </li>
          {error && <p className='error-message' style={{ color: 'red' }}>{error}</p>}
          <li>
            {editData ? (
              <button onClick={handleEdit} className='btn btn-edit' type='submit'>
                Edit
              </button>
            ) : (
              <button className='btn btn-submit' type='submit'>
                Submit
              </button>
            )}
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Header;

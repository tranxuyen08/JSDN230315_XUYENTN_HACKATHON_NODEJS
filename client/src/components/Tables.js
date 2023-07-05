import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Tables = ({handleSetData}) => {
  const [dataTask, setDataTask] = useState([])

  const getData = () => {
    axios.get(`http://localhost:8000/api/v1/taskKeeper`)
      .then(response => {
        console.log(response.data);
        setDataTask(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/v1/taskKeeper/${id}`)
      .then(response => {
        console.log(response.data);
        getData()
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div className=''>
      <table className='table' >
        <thead>
          <tr>
            <th>
              #
            </th>
            <th>
              Content
            </th>
            <th>
              dueDate
            </th>
            <th>
              Status
            </th>
            <th>
              Assigned to
            </th>
            <th colSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {dataTask?.data?.map((item, index) => {
             let statusText = "";
             if (item?.status === 1) {
               statusText = "Pending";
             }else if(item?.status === 2){
              statusText = "Reject";
             }
              else {
               statusText = 'Fulfill';
             }
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item?.content}</td>
                <td>{item?.dueDate.slice(0, 10)}</td>
                <td>{statusText}</td>
                <td>{item?.userName}</td>
                <td className='action'>
                  <button onClick={() => handleSetData(item)} className='btn btn-updates'>Update</button>
                  <button onClick={() => handleDelete(item.id)} className='btn btn-delete'>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Tables
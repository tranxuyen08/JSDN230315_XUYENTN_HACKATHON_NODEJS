const sql = require('../../libs/database/database.connect');

const addTasks = (req, res) => {
  const { content, dueDate, status, userName } = req.body;
  let insertTaskSql = `INSERT INTO taskKeeper (content, dueDate, status, userName) VALUES (?,?,?,?)`;
  const taskValues = [content, dueDate, status, userName];
  console.log(111111, taskValues);
  sql.query(insertTaskSql, taskValues, (err, result) => {
    if (err) {
      console.log('loi roi', err);
      return res.status(500).json({ message: "Loi server" });
    }
    return res.status(200).json({ message: 'add successfully' });
  });
};

const getTasks = (req, res) => {
  let getTaskSql = `SELECT * FROM taskKeeper`;
  sql.query(getTaskSql, (err, result) => {
    if (err) {
      console.log('loi roi', err);
      return res.status(500).json({ message: "Loi server" });
    }
    return res.status(200).json({ message: 'get successfully', data: result });
  });
};

const deleteTask = (id, res) => {
  let deleteTaskSql = `DELETE FROM taskKeeper WHERE id = ?`;
  sql.query(deleteTaskSql, [id], (err, result) => {
    if (err) {
      console.log('Lỗi:', err);
      return res.status(500).json({ message: "Lỗi server" });
    }
    res.status(200).json({ message: 'Xóa thành công' });
  });
}

const updateTask = (id, req, res) => {
  let updateTaskSql = `UPDATE taskKeeper SET content =?, dueDate =?, status =?, userName =? WHERE id =?`;
  const taskValues = [req.body.content, req.body.dueDate, req.body.status, req.body.userName, id];
  sql.query(updateTaskSql, taskValues, (err, result) => {
    if (err) {
      console.log('Lỗi:', err);
      return res.status(500).json({ message: "Lỗi server" });
    }
    res.status(200).json({ message: 'Cập nhật thành công' });
  });
}

module.exports = { addTasks, getTasks, deleteTask, updateTask };

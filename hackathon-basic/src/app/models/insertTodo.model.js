const sql = require('../../libs/database/dbConnect')

const modelAddTodo = (req, res) => {
  const { id, title } = req.body;
  let insertTodoSql = `INSERT INTO noteKeeper (id, title) VALUES (?,?)`;
  const todoValues = [id, title];
  sql.query(insertTodoSql, todoValues, (err, result) => {
    if (err) {
      console.log('loi roi', err);
      return res.status(500).json({ message: "Loi server" });
    }
    return res.status(200).json({ message: 'add successfully' });
  });
}

const getTodo = (req, res) => {
  let getTodoSql = `SELECT * FROM noteKeeper`;
  sql.query(getTodoSql, (err, result) => {
    if (err) {
      console.log('loi roi', err);
      return res.status(500).json({ message: "Loi server" });
    }
    res.status(200).json(result);
  });
}

const deleteTodo = (id, req, res) => {
  let deleteTodoSql = `DELETE FROM noteKeeper WHERE id = ?`;
  sql.query(deleteTodoSql, [id], (err, result) => {
    if (err) {
      console.log('Lỗi:', err);
      return res.status(500).json({ message: "Lỗi server" });
    }
    res.status(200).json({ message: 'Xóa thành công' });
  });
}


module.exports = { modelAddTodo, getTodo,deleteTodo };

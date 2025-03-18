const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const db = require('./db'); // 引入 SQLite 数据库

const app = express();

// 中间件
app.use(cors());
app.use(bodyParser.json());

// 路由
app.use('/api/auth', authRoutes);

// 启动服务器
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
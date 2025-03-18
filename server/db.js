const sqlite3 = require('sqlite3').verbose();

// 创建或打开数据库文件
const db = new sqlite3.Database('./meme-game.db', (err) => {
    if (err) {
        console.error('Error opening database', err);
    } else {
        console.log('Connected to SQLite database');

        // 创建 users 表
        db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
      )
    `, (err) => {
            if (err) {
                console.error('Error creating users table', err);
            } else {
                console.log('Users table created or already exists');
            }
        });
    }
});

module.exports = db;
const db = require('../config/db');

class Post {
    constructor(title, data, userID) {
        this.title = title;
        this.data = data;
        this.authorID = userID;

    }

    save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO post(
           title,
           data,
           author_ID,
           created_at 
        )
        VALUES(
            '${this.title}',
            '${this.data}',
            '${this.authorID}',
           ' ${createdAtDate}'
        )
        `;

        return db.execute(sql);
    }

    static findAll() {
        let sql = "select post.title,post.created_at, post.data, post.ID, post.author_ID, user.username from post INNER JOIN user ON post.author_ID = user.ID ORDER BY id DESC ;";
        return db.execute(sql);
    }

    static findById(id) {
        let sql = `select post.title,post.created_at, post.data, post.ID, post.author_ID, user.username from post INNER JOIN user ON post.author_ID = user.ID  WHERE post.ID = ${id};`;

        return db.execute(sql);
    }
}

module.exports = Post;
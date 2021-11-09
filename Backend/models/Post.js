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
        let sql = "SELECT * FROM post;";

        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM post WHERE id = ${id};`;

        return db.execute(sql);
    }
}

module.exports = Post;
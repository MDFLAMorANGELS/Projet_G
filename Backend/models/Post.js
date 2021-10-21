const db = require('../config/db');

class Post {
    constructor(title, data) {
        this.title = title;
        this.data = data;
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
           created_at 
        )
        VALUES(
            '${this.title}',
            '${this.data}',
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
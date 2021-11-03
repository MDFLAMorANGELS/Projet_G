const db = require('../config/db');

class Comment {
    constructor(comment) {
        this.comment = comment;
    }

    save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO comment(
           comment,
           created_at 
        )
        VALUES(
            '${this.comment}',
           ' ${createdAtDate}'
        )
        `;

        return db.execute(sql);
    }

    static findAll() {
        let sql = "SELECT * FROM comment;";

        return db.execute(sql);
    }
}

module.exports = Comment;
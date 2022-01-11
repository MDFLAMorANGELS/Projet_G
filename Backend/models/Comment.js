const db = require('../config/db');

class Comment {
    constructor(comment, userID, postId) {
        this.comment = comment;
        this.userID = userID;
        this.postId = postId;
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
           author_ID,
           post_ID,
           created_at 
        )
        VALUES(
            '${this.comment}',
            '${this.userID}',
            '${this.postId}',
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
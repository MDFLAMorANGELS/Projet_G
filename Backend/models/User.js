const db = require('../config/db');

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO user(
           username,
           email,
           password,
           created_at 
        )
        VALUES(
            '${this.username}',
            '${this.email}',
            '${this.password}',
            '${createdAtDate}'
        )
        `;

        return db.execute(sql);
    }

    static findByEmail(email) {
        let sql= `
            SELECT * FROM user WHERE email = '${email}';
        `;

        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM user WHERE ID = '${id}';
        `;
        //console.log(sql);
        return db.execute(sql);
    }
}

module.exports = User;
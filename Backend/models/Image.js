const db = require('../config/db');

class Image {
    constructor(title, type , taille, bin, postId) {
        this.title = title;
        this.type = type;
        this.taille = taille;
        this.bin = bin;
        this.postId = postId;
    }

    save() {

        let sql = `
        INSERT INTO image(
            title,
            type,
            taille,
            bin,
            post_ID
        )
        VALUES(
            '${this.title}',
            '${this.type}',
            '${this.bin}',
            '${this.post_ID}'
        )
        `;
        /*
         db.execute(sql, (err, results, fields) => {
             if (err) {
                 throw error
             }
             console.log(results)
             return results
         });
         */
        return db.execute(sql)
        
    }

    
}

module.exports = Image;
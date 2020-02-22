/**
 * 
 * See also:
 * - https://www.sqlitetutorial.net/sqlite-nodejs/
 * - https://expressjs.com/de/guide/database-integration.html#sqlite
 * 
 */

const guide = 'https://www.sqlitetutorial.net/sqlite-nodejs/';

const database = __dirname + '/../data/data.sqlite';

var sqlite3 = require('sqlite3').verbose();

var newuser = [
    {"ID": 0, "NAME": "Fritz", "DESC": "User", "ACTIVE": 0},
    {"ID": 0, "NAME": "Max", "DESC": "User", "ACTIVE": 0},
    {"ID": 0, "NAME": "Peter", "DESC": "User", "ACTIVE": 0},
    {"ID": 0, "NAME": "Tobias", "DESC": "User", "ACTIVE": 0}
]

console.log('SQLite NodeJS Demo');

let db = new sqlite3.Database(database, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log(`Connected to the ${database} database.`);
  });

newuser.forEach((value) => {
    sql = `INSERT INTO user (NAME, DESC, ACTIVE) VALUES ('${value.NAME}','${value.DESC}',${value.ACTIVE})`;
    db.run(sql, (err) => {
        if (err)
            console.log(err.message)
        else {
            console.log(`Insert: ${sql}`);
        }
    })
})

db.serialize(() => {
    db.each('SELECT * from USER', (err, row) => {
        if(err)
            console.log(err.message);
        else
            console.log(row.ID + " | " + row.NAME + 
                " | " + row.DESC  +
                " | " + row.ACTIVE);
    });
})

db.close((err) => {
    if (err)
        console.log(err.message);
    else
        console.log('Close the database connection.')
});

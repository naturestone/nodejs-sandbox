# sqlite-nodejs Demo

## Installation

```sh
npm install --save sqlite3
```

## Dokumentation

- <https://www.sqlitetutorial.net/sqlite-nodejs/>
- <https://expressjs.com/de/guide/database-integration.html#sqlite>

## Demo

### Modul laden

```js
var sqlite3 = require('sqlite3').verbose();
```

### Mit Datenbank verbinden

```js
let db = new sqlite3.Database(database, (err) => { /*...*/ });
```

### Select-Statement

```js
db.each('SELECT * from USER', (err, row) => { /*...*/ });
```

### Insert-Statement 

```js
sql = `INSERT INTO user (NAME, DESC, ACTIVE) VALUES (?)`;
db.run(sql, [NAME,DESC,ACTIVE], (err) => { /*...*/ });
```

### Datenbankverbindung schließen

```js
db.close((err) => { /*...*/ });
```
const express = require('express');

const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your mysql user
        user: 'root',
        //mysql password
        password:'@Alonzo512',
        database: 'election',
    },
    console.log('connected to election database')
);

//db.query(`SELECT * FROM candidates WHERE id=1`, (err,rows) => {
  //  if (err) {
   //     console.log(err);
  //  }
    
 //   console.log(rows);
//});

//Create candidate
//const sql = `INSERT INTO candidates (id,first_name, last_name, industry_connected)
//VALUES (?,?,?,?)`;
//const params = [1, 'Ronald', 'Reagan', 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

//Delete candidate
//db.query(`DELETE FROM candidates WHERE id = ?`,1 , (err, result) =>{
    //if (err) {
      //  console.log(err);
    //}
    //console.log(result);
//})
// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
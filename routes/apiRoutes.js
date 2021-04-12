// Load Data 
const fs = require('fs'); 
const notes = require('../db/db.json');

//Routing 
module.exports = (app) => {
    fs.readFile('db/db.json', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data); 

    app.get('/api/notes', (req, res) => res.JSON(notes));

    app.post('/api/notes', (req, res) => {
        notes.push(req.body);
        updateDB(); 
        res.send(notes); 
        // res.end(notes); 
    }); 

//     app.delete(`api/notes/${id}`, (req, res) => {
        
//     }); 

    function updateDB() {
        fs.writeFile('db/db.json', JSON.stringify(notes), err => {
            if (err) throw err;
            return true; 
        });
    }; 

    });
}; 
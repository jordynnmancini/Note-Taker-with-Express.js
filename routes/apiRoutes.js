// Load Data 
const fs = require('fs'); 
const notes = require('../db/db.json');

//Routing 
module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(notes));

    app.post('/api/notes', (req, res) => {
        notes.push(req.body);
        updateDB(); 
        res.send(notes); 
    }); 

//     app.delete(`api/notes/${id}`, (req, res) => {
        
//     }); 

    function updateDB() {
        fs.writeFile('db/db.json', JSON.stringify(notes), err => {
            if (err) throw err;
            return true; 
        });
    };
}; 
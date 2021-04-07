// Load Data 
const fs = require('fs'); 
// const savedNotes = require('../db/db.json');

//Routing 
module.exports = (app) => {
    fs.readFile('db/db.json', (err, data) => {
        if (err) throw err;
        const savedNotes = JSON.parse(data); 

    app.get('api/notes', (req, res) => res.JSON(savedNotes));

    app.post('api/notes', (req, res) => {
        savedNotes.push(req.body);
        updateDB(); 
        res.send(savedNotes); 
    }); 

//     app.delete(`api/notes/${id}`, (req, res) => {
        
//     }); 

    function updateDB() {
        fs.writeFile('db/db.json', JSON.stringify(savedNotes, '/t'), err => {
            if (err) throw err;
            return true; 
        });
    }

    });
}; 
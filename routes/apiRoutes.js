// Load Data 
const fs = require('fs'); 
// const note = require('../db/db.json');

//Routing 
module.exports = (app) => {
    fs.readFile('db/db.json', (err, data) => {
        if (err) throw err;
        const note = JSON.parse(data); 

    app.get('/api/notes', (req, res) => res.JSON(note));

    app.post('/api/notes', (req, res) => {
        note.push(req.body);
        updateDB(); 
        res.send(note); 
        // res.end() ?? 
    }); 

//     app.delete(`api/notes/${id}`, (req, res) => {
        
//     }); 

    function updateDB() {
        fs.writeFile('db/db.json', JSON.stringify(note, '/t'), err => {
            if (err) throw err;
            return true; 
        });
    }

    });
}; 
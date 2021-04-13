// Load Data 
const fs = require('fs'); 
const notes = require('../db/db.json');
const uniqid = require('uniqid');


//Routing 
module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(notes));

    app.post('/api/notes', (req, res) => {
        req.body.id = uniqid(); 
        notes.push(req.body);
        updateDB(); 
        res.send(notes); 
    }); 

    // app.delete(`api/notes/:${id}`, (req, res) => {
    //     fs.readFile('db/db.json', (err,data) => {
    //         if (err) throw err;
            
    //     })
    // }); 

    function updateDB() {
        fs.writeFile('db/db.json', JSON.stringify(notes), err => {
            if (err) throw err;
            return true; 
        });
    };
}; 
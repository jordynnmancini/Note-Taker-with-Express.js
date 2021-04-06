// Load Data 
const savedNotes = require('../db/db.json');

//Routing 
module.exports = (app) => {
    app.get('api/notes', (req, res) => res.json(savedNotes));

    app.post('api/notes', (req, res) => {
        savedNotes.push(req.body); 
    }); 

    app.delete(`api/notes/${id}`, (req, res) => {

    }); 
    
}; 
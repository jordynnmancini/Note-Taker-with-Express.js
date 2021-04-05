//Dependencies
const express = require('express');

//Express Configuration
const app = express(); 
const PORT = process.env.PORT || 8080
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

//Router
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app); 

// Listener
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
})
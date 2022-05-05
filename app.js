// Express 
const express = require('express');

// Express app
const app = express();

// Make clear we'll use JSON
app.use(express.json())

// Localhost port
const port = 3000;

// HTTP METHODS

app.get('/v1/explorers', (req, res) => {
    console.log(`API Explorers GET ALL requests ${new Date()}`);
    console.log(`Getting explorer with id ${req.params.id}`);

    const explorer1 = {
        id: 1,
        name: 'Carlo1',
    }
    const explorer2 = {
        id: 2,
        name: 'Carlo2',
    }
    const explorer3 = {
        id: 3,
        name: 'Carlo3',
    }
    const explorer4 = {
        id: 4,
        name: 'Carlo4',
    }

    const explorers = [explorer1, explorer2, explorer3, explorer4];

    res.status(200).json(explorers);
});

// Get explorer by id
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`);
    console.log(`Getting explorer with id ${req.params.id}`);
    const explorer = {
        id: 1, 
        name: "Michel"
    };
    res.status(200).json(explorer);
});

// Post
app.post('/v1/explorers', (req, res) => {
    console.log(`Api Explorers POST request ${new Date()}`);
    const requestBody = req.body; // Client parameters
    res.status(201).json({
        message: "Created"
    });
});

// Delete
app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers DELETE request ${new Date()}`);
    console.log(`Delete explorer with id ${req.params.id}`);
    const requestBody = req.body; // Parámetros de un cliente
    res.status(200).json({
        message: "Deleted"
    });
});

// initialize app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
});
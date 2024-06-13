// Import the required modules
const express = require('express');
const path = require('path');

// Create an express application
const app = express();

// Serve static files from the public directories
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'contact')));
app.use(express.static(path.join(__dirname, 'create')));
app.use(express.static(path.join(__dirname, 'fetch')));
app.use(express.static(path.join(__dirname, 'home')));
app.use(express.static(path.join(__dirname, 'login')));
app.use(express.static(path.join(__dirname, 'password-reset')));
app.use(express.static(path.join(__dirname, 'request-password-reset')));

// Handle GET requests to any path by returning the appropriate HTML file
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home', 'home.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'login', 'login.html')));
app.get('/fetch', (req, res) => res.sendFile(path.join(__dirname, 'fetch', 'fetch.html')));
app.get('/create', (req, res) => res.sendFile(path.join(__dirname, 'create', 'create.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'contact', 'contact.html')));
app.get('/password-reset', (req, res) => res.sendFile(path.join(__dirname, 'password-reset', 'password-reset.html')));
app.get('/request-password-reset', (req, res) => res.sendFile(path.join(__dirname, 'request-password-reset', 'request-password-reset.html')));

// Listen on the appropriate port provided by the environment
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
//Install express server
// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/appt-management-frontend'));

// app.get('/*', function(req, res){
//     res.sendFile(path.join(__dirname+'/dist/appt-management-frontend/login.html'));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);
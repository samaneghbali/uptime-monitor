/*
* primary file for the API
*
 */

// Dependencies
const http = require('http');
const url = require('url');

// The server should respond to all requests with a string
const server = http.createServer(function (req, res) {

    // Get the Url and Parse It //true for getting query string too
    const parsedUrl = url.parse(req.url, true);

    // Get the Path
    const path = parsedUrl.pathname;
    // Make ../foo/koo/ ==> foo/koo  Deletes the last and first slash if any
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    console.log('Path:', trimmedPath);

    // Send the Request
    res.end('This is Node Server!\n');

    // Log the Request Path
})

// Start Server and have it listen to port 3000
server.listen(3000, function () {
    console.log('The Server is listening to port 3000 now');
});



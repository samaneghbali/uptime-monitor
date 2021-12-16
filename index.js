/*
* primary file for the API
*
*
 */

// Dependencies
var http = require('http');
var url = require('url');

// The server should respond to all requests with a string
var server = http.createServer(function (req, res) {

    // Get the Url and Parse It //true for getting query string too
    var parsedUrl = url.parse(req.url, true);

    // Get the Path
    var path = parsedUrl.pathname;
    // Make ../foo == ../foo/  Deletes the last slash
    var trimmedPath = path.replace(/^\/+|\/+$/g, '')
    console.log('Path:', trimmedPath);

    // Send the Request
    res.end('Hello Worldd\n');

    // Log the Request Path
})

// Start Server and have it listen to port 3000
server.listen(3000, function () {
    console.log('The Server is listening to port 3000 now');
})

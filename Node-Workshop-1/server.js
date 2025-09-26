const http = require("http");

http.createServer(function (request, response) {
    // Tell the browser we are sending an HTML page
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<table border="1" style="border-collapse: collapse; width: 100%;">');
    response.write('<tr><th>Name</th><th>Address</th><th>City</th></tr>');
    response.write('<tr><td>Matti Meikäläinen</td><td>Timotie 1, as 10</td><td>Tampere</td></tr>');
    response.write('<tr><td>Maija Virtanen</td><td>Asematie 12</td><td>Kiljava</td></tr>');
    response.write('</table>');
    response.end();

    

}).listen(8081); // The server will listen on "port 8081"

console.log('Server is running at http://127.0.0.1:8081/');
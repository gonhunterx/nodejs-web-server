const http = require('http') //reclude http module
const fs = require('fs') //include fs module (file handling)
const port = 3000 //port number

const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'}) //tells the browser what type of response it is
    fs.readFile('index.html', function(error, data){
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Fount')
        } else {
            res.write(data)
        }
        res.end()
    })
    // res.write('Hello Node') //write a response to the client
    // res.end() //end the response
})

server.listen(port, function(error){
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port) //listen to port 3000
    }
})
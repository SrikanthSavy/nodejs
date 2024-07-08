const http =require('http')

//Server Creation 
const server = http.createServer(function(req,res){
    console.log(req.url,req.method)
    res.write("<h2>Welcome to Nodejs Server.</h2>")
    res.write("<p>It should be fun to learn Nodejs!</p>")
    res.end()

})

// Server Starting
server.listen(8080,function(){
    console.log('Node Server is running on port 8080!')
})
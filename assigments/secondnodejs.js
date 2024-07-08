
const http = require('http')

const emp = [
    {
        empid: 1,
        empName: "Shoda",
        empaddress: "Hyd"
    },
    {
        empid: 2,
        empName: "Srikanth",
        empaddress: "Sec"
    },
    {
        empid: 3,
        empName: "Reddy",
        empaddress: "Kom"
    }
]

//create a server
const server = http.createServer(function (req, res) {
    console.log(req.url)

    if (req.url == "/") {
        res.write("<h1>Welcome to second Node server running on 9999 -port!</h1>")
    
    }else if(req.url=="/allemp"){
        res.write(JSON.stringify(emp))
    }else if(req.url=="/login"){
        res.write("<h2>Welcome to Login Page! </h2>")
    }
    
    res.end()

})


//Start the server 
server.listen(9999, function(){
    console.log("Server started on Port 9999!")
})
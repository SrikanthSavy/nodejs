
const http = require('http')

//create a mobile objec

const mobiles =[
    {
        id:1001,
        brand:"Iphone",
        price:50000,
        ram: "4 Gigs",
        storage: "128 GB",
        camera :"64 mb"
    },
    {
        id:1002,
        brand:"Samsung",
        price:30000,
        ram: "4 Gigs",
        storage: "128 GB",
        camera :"64 mb"
    },
    {
        id:1003,
        brand:"Google Pixel",
        price:25000,
        ram: "8 Gigs",
        storage: "128 GB",
        camera :"64 mb"
    },
    {
        id:1004,
        brand:"OnePlus",
        price:35000,
        ram: "16 Gigs",
        storage: "256 GB",
        camera :"128 mb"
    },
    {
        id:1005,
        brand:"Oppo",
        price:15000,
        ram: "16 Gigs",
        storage: "512 GB",
        camera :"64 mb"
    }    
]


const laptops =[
    {
        id:101,
        brand:"Lenova",
        price: 100000,
        ram: "32",
        capacity: "1 TB" ,
        processor:"Intel I-7",
        os: "Windows"
    },
    {
        id:102,
        brand:"HP",
        price: 75000 ,
        ram: "16 Gb",
        capacity: "512 GB" ,
        processor:"Intel i-5",
        os: "Windows "
    },
    {
        id:103,
        brand:"Apple",
        price: 200000,
        ram: "8 GB",
        capacity: "256 GB" ,
        processor:" M1",
        os: "IOS"
    },    {
        id:104,
        brand:"Acer",
        price: 50000 ,
        ram: "16 Gb",
        capacity: "512 GB" ,
        processor:"i-7",
        os: "windows "
    },    {
        id:105,
        brand:"Thinkpad",
        price: 120000,
        ram: "16 Gb",
        capacity: "1 Tb" ,
        processor:"i-9 intel",
        os: "Linux"
    }
]


//Create a server
const server = http.createServer((req,res)=>{
    console.log("Url hit:",req.url)
    
    if (req.url == "/") {
        res.write("<h1>Welcome to E Commersite. i.e.  Node server running on 9000 -port!</h1>")
    
    }else if(req.url=="/mobiles"){
        res.write(JSON.stringify(mobiles))
    }else if(req.url=="/laptops"){
        res.write(JSON.stringify(laptops))
    }

    res.end()
})


//Start the server
server.listen(9000,()=>{
    console.log("Node Server started on port 9000!")
})


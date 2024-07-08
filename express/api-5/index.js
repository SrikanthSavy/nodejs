const express= require('express')

const app= express()


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

const users = [
    {
        userID: 101,
        userName: 'Shoda',
        userAge:    40
        
    },
    {
        userID: 102,
        userName: 'Srikanth',
        userAge:    39
        
    },
    
    {
        userID: 103,
        userName: 'Reddy',
        userAge:    38
        
    }
    
]

app.get('/',(req,res) =>{
    res.status(400)
    res.send({
        status: "Welcome to API Creation Express sssssss!"
        })

})

//Fetch All Users - API
 app.get('/allusers',(req,res)=>{

    res.status(200)
    res.send({
        data:users,
        status: 'All User Data fetched'
    })
 })

//Fetching all Employeess data API
app.get('/allemployess',(req,res)=>{
    res.status(200)
    res.send({
        data:emp,
        status:'All Employess data Fetched!'
    })
})

//FEtch All USers/Employees Data -API
app.get('/allusersemps',(req,res)=>{
    res.status(200)
    res.send({
        userData:users,
        empData:emp,
        status:'Fetching both USers and Employees Data Together'

    })
})







app.listen(8000,(error) =>{
    if(error)
        console.log("Error while loading server 8000")
    else
        console.log("Server started on port 8000")
})
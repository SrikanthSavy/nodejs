const users = [
    {
        id: 1,
        name:"Shoda",
        org: "startup1"
    },
    {
        id: 2,
        name:"Srikanth",
        org: "startup2"
    },
    {
        id: 3,
        name:"Reddy",
        org: "startup3"
    },
    {
        id: 4,
        name:"Babu",
        org: "startup4"
    }
]

const userControl = {
    getUsers: (req,res)=>{
        res.status(200)
        res.send({
            data:users,
            status: "Users fetched sucessfully"
        })
    },
    getUser: function(req,res){
        console.log(req.params)
        console.log(req.query)
        res.status(200)
        res.send({
            data:req.params,
            status: "User fetched sucessfully"
        })
    },
    deleteUser: (req,res)=>{
        console.log(`UserId passed ${req.params.userId}`)
        const index= users.findIndex(user=>user.id==req.params.userId)

        if(index!==-1)
        {
            users.splice(index,1)
            res.status(200)
            res.send(`User Deleted Sucessfully at index: ${index}`)
        }else{
            res.status(404)
            res.send(`User with userId ${req.params.userId} was not found!`)
        }

    },
    addUser:(req,res)=>{
        console.log(`req.body ======= ${req.body}`)
        users.push(
            {
                id: users.length+1,
                ...req.body
            })
        res.send(`User added to users Array at ${users.length}`)
    },
    updateUser:(req,res)=>{
        const index = users.findIndex(user=>user.id==req.params.userId)
        if(index!==-1)
        {
            users[index].name= req.body.name
            users[index].org = req.body.name

            res.status(202)
            res.send(`User updated Sucessfully at : ${index}`)

        }else{
            res.status(404)
            res.send(
                {
                    error: `User Id ${req.params.userId} cannot be found!`,
                    description:"Error description"
                }
                )
        }

    }
}


module.exports=userControl
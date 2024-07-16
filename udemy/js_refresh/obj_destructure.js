
const person = {
    name: "shoda",
    age:    39,
    greet() {
        console.log("Welcome to JS Object destructuring !")
    }
}


const withoutdestructure = (persondata)=>{
    console.log(`Without Destructure name: ${persondata.name}`)
    console.log(`Without Destructure age: ${persondata.name}`)
}

const withdestructure = ({name,age})=>{
    console.log(`With Destructure name: ${name}`)
    console.log(`With Destructure age: ${age}`)
}


withoutdestructure(person)
withdestructure(person)


//Another way of Object destructuring 
const {name,age}=person // Note: properties must be same
console.log(` name: ${name}`)
console.log(` age: ${age}`)

//Array destructuring
const sportsArray = ['cricket','football'] 
const [sport1,sport2] = sportsArray //// Note: properties can be different for arrays
console.log(` sport1: ${sport1}`)
console.log(` sport2: ${sport2}`)
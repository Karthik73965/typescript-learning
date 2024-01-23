function AddNumbers (num1:number, num2:number=1):number{
    return num1 + num2
}

//arrow function 
const karthik =(name:string):string =>{
    return "karthik"
}

//mapping 
const heroes = ["iron man ", 1, "allu arjun "]

heroes.map((hero:string | number)=>{
    return `${hero}`
})
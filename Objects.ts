const user = {
    name: "karthik",
    id: 1232,
    ispaid: true
}

//user objecct input 
function createUser({ name: string, id: number, ispaid: boolean }) { }

//passing a object as an input 
createUser(user)


//returning a object 
function updateuser(): { name: string, id: number, ispaid: boolean } {
    return { name: "kathrij", id: 12, ispaid: true }
}

//tye keyword in ts 
type User = {
    readonly name: string //we cannot change the value of it when we use readonly keyword
    id: number
    ispaid: boolean
    bankdetails?: number   // we can use teh bank details or we can use it in our own way  
}

let User :User= {
    name :"karthik",
    id:13,
    ispaid:true
   
}

// combining two types into one type 
type cardnumber = {
    cardnumber:number 
}
type cardname  = {
    cardname :string 
}
// *** & *** we can combine 2 types into 1 types and we can add aditional types to it basically  is used to do that 
type carddetails = cardname & cardnumber &{
    cvv :number 
}

// User.name="jaehrkd"  - we cannot do this basicallly 

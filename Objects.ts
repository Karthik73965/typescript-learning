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
     name: string 
    id: number
    ispaid: boolean
      
}

let User :User= {
    name :"karthik",
    id:13,
    ispaid:true
   
}

// User.name="jaehrkd"  - we cannot do this basicallly 

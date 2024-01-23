const hero :object[] = []

hero.push({name :"kathik"})

// pushing an object into an array which have certain types 
type user = {
    name :string
    id :number
    ispaid?:boolean // this was optionl as we discussed before 
}

const Users :user[]= []

Users.push({name:"karthik", id:121})

// array inside the array 

const mlmodels :number[][]=[]

mlmodels.push([121,12,212])

// interface karthik {
    //     name :string 
//     age :number 
// }
// interface kowshik {
//     common :karthik
// }   
// - the above one  can be done


function nameofanyperson <type> (name:type) :type{
    return name
}

interface nill {
  type :string
}
nameofanyperson <nill>({type:"kafkanf"})


const hello = <T>(hello1: T): T => {
    return  hello1; //weird syntax 
}

// classes with genirics 

interface cart {
    name:string
    incart:number
    photos  :string[]
}

class products <T>{
    public cart :T[] =[]
  public  products (  product:T){
        return this.cart.push(product)
    }
}

const newproduct =  new products()

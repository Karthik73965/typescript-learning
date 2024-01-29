interface metatags {
    name :string
    description:string 
    score :number 
}

class metadantasol implements metatags{
    constructor(
        public name :string,
        public description :string,
        public score :number 
    ){}
}

//abstract classes 
abstract class karthik {
    constructor( public name:string , public  age:number ){
        this.age = 9 , 
        this.name = "hello "
        console.log(this)
    }

}
// const rony = new karthik("karthik", 0) - this wiill throw you an erroe 

const newmeta = new metadantasol("karthik", "desc", 9)
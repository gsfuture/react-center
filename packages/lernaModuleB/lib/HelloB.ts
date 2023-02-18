
class HelloC {
    name:string = "man";
    sex:number = 100;
}



export class HelloB {

    person:HelloC = new HelloC();
    
    constructor(){
        this.person.name = "ggg";
        this.person.sex = 123;
    }

    print(){
        console.log("Hello B------- BBBB -----")
    }
}


// let helloB = new HelloB();
// helloB.print();

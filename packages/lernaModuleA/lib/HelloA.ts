
import {HelloB} from "@lerna-good/lerna-module-b";

export class HelloA {

    print(){
        console.log("Hello A------")
        console.log("Hello A------ 2023")

        let helloB = new HelloB();
        helloB.print();
    }
}


// let helloA = new HelloA();
// helloA.print();

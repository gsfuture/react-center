// @ts-nocheck
import {HelloB} from "../../lernaModuleB/lib/HelloB";

export class HelloA {

    print(){
        console.log("Hello A")

        let helloB = new HelloB();
        helloB.print();
    }
}


let helloA = new HelloA();
helloA.print();

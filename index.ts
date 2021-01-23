// Import stylesheets
import "./style.css";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter action</h1> <br> https://youtu.be/NjN00cM18Z4`;


// declare Variables
// var number = 1;
// let count =2;
// console.log("hallo", count + number);

// call Function
function doSomething(){
  for(var i =0;i<5;i++){
    console.log(i);
  }
console.log("finally: " +i);
}
//doSomething();

let a: number;
a=1
let b: boolean;
b=false;
let c: string;
c = "hallo";
let d: any;
d="uhu";

//typedeclaration
let message: string = "abc";
let endswithC = message.endsWith("c");
let endswithCalternative = (message as string).endsWith("c");
//console.log(endswithC);
//console.log(endswithCalternative);

//normal function
let log = function(messagea: string){
  console.log(messagea);
}
log("abc")
//arrow function > das selbe wie normal function
let doLog = (messageb: string) => {
  console.log(messageb);
}
doLog("huhu")

//interface
// Interface aufsetzen:
interface Point {
  x: number,
  y: number,
  //draw: () => void
}
let drawPoint = (point: Point) => {
  console.log("hier käme die Berechnung: " + point + this.x) //Todo wie kann ich das Objekt darstellen?
  }
drawPoint({
  x: 1,
  y: 2
})

//class

class PointClass{
  x: number;
  y: number;

  draw() {
    console.log("X: "+this.x + " Y: "+this.y)
  }
  geDistance(another: Point){
    //...
  }
}
// lange variante: let pointclass: PointClass = new PointClass(); > new weil nocht Speicher zugewiesen werden muss
let pointclass=new PointClass();
pointclass.x = 1
pointclass.y = 2
pointclass.draw();

//class mit constructor

class PointConstructor{
  x: number;
  y: number;

  constructor(x:number, y:number){
    this.x = x
    this.y = y
  }

  draw() {
    console.log("X mit Constructor: "+this.x + " Y mit Constructor: "+this.y)
  }
  geDistance(another: Point){
    //...
  }
}
let pointconstructor=new PointConstructor(3, 4);

pointconstructor.draw();

//weiter mit Minute 36
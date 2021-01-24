// Import stylesheets
import "./style.css";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter action</h1> <br> https://youtu.be/NjN00cM18Z4`;


// 1. declare Variables
// var number = 1; var ist funktionsübergreifend gültig
// let count =2; let ist besser da definiert und nur innerhalb der funtkion verfügbar
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

// call Function mit übergreifender var variabel (nicht gut, var ist quasi global)
function doSomething(){
  for(var i =0;i<5;i++){
    console.log(i);
  }
console.log("finally: " +i); //var variable sollte hier eigentlich nicht mehr laufen in guter Programmiersprache
}
//doSomething();

//normal function
let log = function(messagea: string){
  console.log(messagea);
}
log("abc")

//arrow function > das selbe wie normal function
let arrowfunc =(inhalt: string) => {
  //hier dring steht die Funktion
  console.log(inhalt);
}
arrowfunc("hallo arrow")

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
// lange variante, kurze Zeit steht untendrunter: let pointclass: PointClass = new PointClass(); > new weil noch Speicher zugewiesen werden muss / neue Instanz erzeugt werden muss
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
function area(length ,width){
   return length* width
}

var length=5;
var width= 3;
let rectanglearea=area(length,width);

console.log("Area of Rectanglr is:" +rectanglearea)

function circle(radius){
    return Math.PI *radius*radius
}
var radius=6;
let circlearea=circle(radius);
console.log("Area of Circle is:"+circlearea);


function tarea(base,height){
    return 0.5*base*height
}
var base=5;
var height=3;
let trianglearea=tarea(base,height);
console.log("Area of Triangle is:"+trianglearea);

function celtofar(celsius){
    return (9/5 *celsius) +32;
}
var celsius =32;
let Farea=celtofar(celsius);
console.log("After Converting Celcius to Farenheit value is:"+Farea);


function fartocel(Farenheit){
    return (Farenheit -32) *5/9;

}
var Farenheit =53;
let Carea=fartocel(Farenheit);
console.log("After Converting Farenheit to Celcius value is:"+Carea);



var marks=79.99;
if((marks>=90) && (marks<=100)){
    console.log("Congratulations you Got A+");
}
else if((marks>=80) && (marks<90)){
    console.log("Congratulations you Got A");
}
else if((marks>=70) &&(marks<80)){
    console.log("Congratulations you Got B");
}
else if((marks>=60)&&(marks<70)){
    console.log("Congratulations you Got C");
}
else if((marks>=50)&&(marks<60)){
    console.log("Congratulations you Got D")
}
else if((marks>=0) &&(marks<50)){
    console.log("You are Fail Better luck next Time")
}
else{
    console.log("invalid")
}



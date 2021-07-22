document.write("QUETION-13");

document.write("<br>");
document.write("<br>");


//get min/max value of arrays
function getArrayMax(array){
   return Math.max.apply(null, array);
}
function getArrayMin(array){
   return Math.min.apply(null, array);
}
var ages=[11, 54, 32, 92 ,18 , 27];
var maxAge=getArrayMax(ages); //92
var minAge=getArrayMin(ages); //11
document.write("All array values = ");
document.write("<br>");
document.write(ages);
document.write("<br>");
document.write("Maximum Value = ");

document.write("<br>");

document.write(getArrayMax(ages));
document.write("<br>");

document.write("Minimum Value");

document.write("<br>");

document.write(minAge);

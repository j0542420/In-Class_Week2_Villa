/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: 
      Date:   

      Filename: project02-01.js
 */
"use strict";
window.onerror = function()
{
      window.alert("error happened when converting C to F");
}
function FahrenheitToCelsius(degree)
{
      let c = 0
      console.log(degree);
      try{
            if(degree==0)throw "Divided by zero"; //trigger exception
            c= 100/degree
      }catch(err) //handle the exception
      {
            console.log("Run time exception " + err)
      }finally{
            console.log("finished try--catch")
      }
      return c;
      //return (degree-32)/1.8; Correct code
}
function CelsiusToFahrenheit(degree)
{
      //return degree*1.8 +32; Correct code
      throw "divided by zero";
}
document.getElementById("cValue").onchange = function()
{
      let cDegree = document.getElementById("cValue").value;
      document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
}
document.getElementById("fValue").onchange = function()
{
      let fDegree = document.getElementById("fValue").value;
      document.getElementById("cValue").value = fahrenheitToCelsius(fDegree);
}
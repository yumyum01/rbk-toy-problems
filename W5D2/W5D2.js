/*
1-Write a function called tallEnoughToRide  that takes an array of people objects, 
and returns a an array of names of people who are greater than or equal to 48 inches in height.

You can assume an input which looks like this:

var groupA = [
  {
    name: "Mia",
    age: 10,
    heightInInches: 52
  },
  {
    name: "Jaya",
    age: 9,
    heightInInches: 45
  },
  {
    name: "Kiana",
    age: 10,
    heightInInches: 55
  },
  {
    name: "Alex",
    age: 11,
    heightInInches: 48
  }
]
Calling your function should result in:
tallEnoughToRide(groupA); //["Mia", "Kiana", "Alex"];

Remember: your function should work off of the data it receives, 
not a global variable or only the specific example above. 
I.e. If someone called your function with 10 objects 
(with all safely have the same properties), it should work just as well.

*/
function each(coll, f) {
  if (Array.isArray(coll)) { 
    for (var i = 0; i < coll.length; i++) { 
      f(coll[i], i); 
    } 
  } else { 
     for (var key in coll) { 
       f(coll[key], key); 
     } 
   } 
 } 

  function filter(coll, predicate) {/// predicate = the inline function
  var acc=[]
 each(coll,function(element,ind){
   //console.log(element)
if(predicate(element)){
   acc[ind]=element 
}
 });
 return acc 
}

function tallEnoughToRide(obj){
	return filter(obj,function(element){
		return element.heightInInches>=48

		
	})
}

/*
2-Working off of the same data structure as tallEnoughToRide, 
write a function called tallestPerson that takes  an array of people objects as well, 
and returns the name of the person with the greatest height, 
along with how tall they are (see sample input below).

Calling your function should result in:

tallestPerson(groupA); //"Kiana at 55 inches"


*/

// your answer is here

function impreduce(array,f,start){
  var acc=start
  if(acc===undefined){
    acc=array[0]
    array.slice(1)
  }
  each(array,function(element){
    acc=f(acc,element)
  })
  return acc
}
function tallestPerson(arr){
	var z=impreduce(arr,function(max,element){
if(element>max){
	max=element}
	return max
	})

var f=return filter(obj,function(element){
		return element.heightInInches===55
})

return f[0]['name']+"at"+z+"inches"

}
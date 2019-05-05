'use strict'

// var Alice =[1,2,3];
// var Bob =[1,2,3];

// var Alice =[5,6,7];
// var Bob =[3,6,10];

var Alice =[17,28,30];
var Bob =[99, 16,8];

var aliceAwarded = [];
var bobAwarded  = [];

function compareTriplets(a, b) {
for(var i = 0; i< a.length;i++){
  if(a[i]> b[i]){
    aliceAwarded.push(1)
  }
  else if(a[i] < b[i]){
      bobAwarded.push(1)
  }
  else if(a[i] === b[i]){
      aliceAwarded.push(0);
      bobAwarded.push(0)
  }
  else {
      return ;
  }
}


var newAliceAwareded = [];
var newbobAwarded = [];

if(aliceAwarded.every((d)=> d === 1)) {
    newAliceAwareded.push(aliceAwarded.length)
  
}
else if(aliceAwarded.every((s)=> s === 0)) {
    newAliceAwareded.push(0)
}
else if(aliceAwarded.indexOf(1) > -1){
    newAliceAwareded.push(1)
}
else {
    for(var i = 0; i < aliceAwarded.length;i++){
        if(i === 1){
            newAliceAwareded.push(i)
        }
    }
}

if(bobAwarded.every((d)=> d === 1)){
    newbobAwarded.push(bobAwarded.length)
}
else if(bobAwarded.indexOf(1) > -1){
    newbobAwarded.push(1)
}
else if(bobAwarded.every((s)=> s === 0)) {
    newbobAwarded.push(0)
}
else {
    for(var i = 0; i < bobAwarded.length;i++){
        if(i === 1){
           bobAwarded.push(i)
        }
       
    }
}

var output = newAliceAwareded.concat(newbobAwarded)

console.log(output)



}
compareTriplets(Alice, Bob)
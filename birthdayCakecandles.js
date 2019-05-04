'use strict'

var arr=[
    18 ,90 ,90 ,13 ,90, 75, 90 ,8,90,43];
    
    var n = 2;
    // var arr=[
    //     3,2,3,1];
    //     var n = 4;

    var thenewArray_arr=[];
    var output=[];
    var theOuput_n=[];
    var newValueOf_n=[];
    var theNew_n_ForTheMaxValueOftheArray_arr=[];
    function App(){

        // find if n is  less then all values in the array arr if it's true we must
        // return the greatest value in the arr as the value of the variables n;
        
        // 1) search the max values in the array arr
            var MaxValueOftheArray_arr= Math.max(...arr);
        // 2) compare if the variables n is less than the max value of the array arr
        var findIf_n_existIn_arr= arr.filter(function(arr){
         if(n === arr ){ 
           newValueOf_n.push(arr)
            return newValueOf_n;
         }

         if(n!==arr){
            //  if n didn't exist in arr substact the greatest value  in arr  by 1 
            // until the substract is  less than the n value 
            // console.log(MaxValueOftheArray_arr)

            for(var i = 1; i <= MaxValueOftheArray_arr;i++){
                // MaxValueOftheArray_arr = MaxValueOftheArray_arr-=1;
                if(i === n){
                    newValueOf_n.push(MaxValueOftheArray_arr)
                   
                    return newValueOf_n;
                }
                else {
                    newValueOf_n.push(MaxValueOftheArray_arr)
                
                    return newValueOf_n;
                }
            }
        }
        });
     
        // 4) find the right value
        findIf_n_existIn_arr.filter(function(dn){
            if(n === dn ){
                theOuput_n.push(dn)
            }
            else {
              theOuput_n.push(MaxValueOftheArray_arr);
            }
        });
  


        var resultOuput_n= theOuput_n[0];
        arr.filter(function (data){
                   if(data===resultOuput_n){
                       output.push(data)
                   }
               })
               console.log(output.length);
    }
    App(arr);


//   input  10
// array =18 90 90 13 90 75 90 8 90 43
    
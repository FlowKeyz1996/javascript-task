 function convertFahrToCelsius(celsius){
      var fahrenheit;

      /*if(typeof(celsius) !== 'string') {
          console.log
        console.log(typeof(celsius));
      } else if(typeof(celsius) !== 'number') {
        console.log(typeof(celsius))
      }*/
       if(typeof(celsius) !== "string"||"number"){
        console.log(typeof(celsius));
       }
       if(typeof(celsius) === "object"){
           console.log("invalid number but it is an"  +  " " + typeof(celsius));
       }
         
      fahrenheit = celsius - 32 * 5/9;
      

      return fahrenheit;
 }
 
  
 console.log(convertFahrToCelsius(0).toFixed(4));
 console.log(convertFahrToCelsius([1,2,3]));


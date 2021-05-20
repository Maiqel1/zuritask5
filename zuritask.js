   

const yugioh = (n) =>{
    let result = [];

    if (isNaN(n) || parseInt(n) < 1){
        console.log(`invalid parameter: ${n}`);
        return `invalid parameter: ${n}`;
    } 

    for (let i = 1; i <=n; i++) {
        let localvar = [];
        let fvar = "";  

        if (i % 2 == 0) {
            localvar.push("yu")
        }
        if (i % 3 == 0) {
            localvar.push("gi")
        }
        if (i % 5 == 0) {
            localvar.push("oh")
        }
    

       fvar = localvar.join("-");
        
       if (fvar) {
           result.push(fvar)
       } else {
           result.push(i)
       }
         
     }
         console.log(result);
         return result;
   }

   yugioh(100)  


    // convert farh to Celcius// 

    function convertFahrToCelcius(f){
    
        let c = (f - 32) * 5/9;
        let fahr = Object.prototype.toString.call(f);
    
        if (fahr ==="[object Number]" || (fahr ==="[object String]" && !isNaN(f))) {
            return c.toFixed(4);
        } else {
            let param  = fahr.split(" ");
            param[1] = param[1].substring(0, param[1]. length-1);
    
            return `${JSON.stringify(f)} is not a valid number but a/an ${param[1]}`
        }
        
    }
    
    console.log(convertFahrToCelcius());
    
    
    
    
    
    

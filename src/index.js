module.exports = function getZerosCount(number, base) {
  // your implementation
  function getSimpleMultipliers(num){
	let tempArr=[],tempObj={};
	
	for(let i =2; i<=num;i++){
		if(num%i === 0){
			tempObj[i]=1;
			num=num/i;
		}

		while(num%i ===0){
			num=num/i;
			tempObj[i]++;
		}
		
	}
	return tempObj;
}
 var multipliers=getSimpleMultipliers(base);
for(let key in multipliers){
	var multiplier=Number(key);

}

var conter=0;
k=multiplier;
  	while(k<number || k==number){
   		var tempK=k;
    
      	while(tempK%multiplier === 0){
        		conter++;
      			tempK/=multiplier;
        }
        
				
      k+=multiplier;
    }
return Math.round(conter/multipliers[multiplier]);
}





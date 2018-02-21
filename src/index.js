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
var arr=[[],[]];
for(let key in multipliers){
	arr[0].push(Number(key));
	arr[1].push(Math.pow(Number(key),multipliers[key])/multipliers[key]);

}
var mostBiggerMult=arr[1].reduce(function(prev,curent,index,arr){
	return arr[prev]<curent?index:prev;
},0);
var multiplier= arr[0][mostBiggerMult];	
var conter=0, flag=multipliers[multiplier];
k=multiplier;

  	while(k<number || k==number){
   		var tempK=k;
    		

      	while(tempK%multiplier === 0){
        		
        		conter++
        		tempK/=multiplier;
        }
        
				
      k+=multiplier;
    }
return (conter/multipliers[multiplier])^0;
}





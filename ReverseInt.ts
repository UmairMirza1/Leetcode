function reverse(x: number): number {
    if (x==0){return 0}
    let num : string =""
   let isNeg: boolean = false
   if(x<0){
       isNeg=true;
       x=-1*x
   }
    while( x!=0)
    {
        const number =x %10;      
        x= Math.floor(x/10)
        num+= number.toString(10);
    }
   // console.log(num)
    
    let intNum=  parseInt(num)

    if(isNeg)
    {
        intNum = intNum* -1
    }
    const lowerLimit= -1 * Math.pow(2,31)
    const upperLimit= Math.pow(2,31) -1
    if ( intNum< lowerLimit || intNum> upperLimit)
    {return 0}
    else {return intNum}

};

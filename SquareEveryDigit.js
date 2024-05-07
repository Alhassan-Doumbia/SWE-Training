function SED(number){
    let toStr=number.toString();
    let numberArray=toStr.split('');
    let result=numberArray.map((x)=>{
        let toInt=parseInt(x);
       return toInt*toInt;
    })
    return parseInt(result.join(''))
}

function Maskify(cc){
    let creditCardNumber=cc.split('');
    if(creditCardNumber.length>4){
        let displayedData=creditCardNumber.slice(creditCardNumber.length-4);
        let maskedData=[];
        for(let i=0;i<creditCardNumber.length-4;i++){
            maskedData.push("#")
        }
        return maskedData.join('')+displayedData.join('') ;
    }
    else {return cc;}
}
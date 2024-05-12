function MonkeyCounter(n){
    let rep=[];
    for(let i=0;i<n;i++){
        rep.push(i+1);
    }
    return rep;
}

// refactoredd 
function monkeyCounter(n) {
    return Array.from(Array(n), (_, index) => index + 1);
}

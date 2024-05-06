function triangleFinder(a,b,c){

    let semiPerimeter=(a+b+c)/2;
    let surface=Math.sqrt(semiPerimeter*(semiPerimeter-a)*(semiPerimeter-b)*(semiPerimeter-c));
    if(surface>0){
        let comp=a+b;
        let comp2=b+c;
        let comp3=c+a;
        return comp > c && comp2 > a && comp3 > b;
    }
    return false
}

// Refactored 
function isTriangle(a,b,c){

    let semiPerimeter=(a+b+c)/2;
    let surface=Math.sqrt(semiPerimeter*(semiPerimeter-a)*(semiPerimeter-b)*(semiPerimeter-c));
     return surface>0 && a+b > c && b+c > a && c+a > b ;
}
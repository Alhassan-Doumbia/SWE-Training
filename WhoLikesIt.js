function WhoLikeIt(n){
    let statementArray=[
        "no one likes this",
        `${n[0]} likes this`,
        `${n[0]} and ${n[1]} like this`,
        `${n[0]}, ${n[1]} and ${n[2]} like this`,
        `${n[0]}, ${n[1]} and ${n.length-2}others like this`
    ]
    if(n.length==0){return statementArray[0];}
    else if (n.length==1){return statementArray[1];}
    else if(n.length==2){return statementArray[2];}
    else if (n.length==3){return statementArray[3];}
    else if(n.length>3){return statementArray[4];}

}
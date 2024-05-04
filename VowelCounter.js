function getCount(content) {
    const turnToArr=content.split('');
    const vowelArray=["a","e","i","o","u"];

    let count=0;
    for(let index in turnToArr){
        vowelArray.includes(turnToArr[index])?count++:count+=0
    }
    return count
}
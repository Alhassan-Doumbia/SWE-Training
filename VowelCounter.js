function getCount(content) {
    const turnToArr=content.split('');
    const vowelArray=["a","e","i","o","u"];

    let count=0;
    for(let index in turnToArr){
        vowelArray.includes(turnToArr[index])?count++:count+=0
    }
    return count
}
function getCount(content) {
    const turnToArr=content.split('');
    const vowelArray=["a","e","i","o","u"];
    let count=0;
    turnToArr.forEach(element=>{vowelArray.includes(element)?count++:count+=0})
    return count
}

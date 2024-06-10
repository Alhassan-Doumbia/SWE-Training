function firstNonRepeatingLetter(s){
    let lowerCasing=s.toLowerCase();
    let content = lowerCasing.split('')
    let occurencesArray=[];
    let survivorIndex=[];
    let count=1;
    for(let i=0;i<content.length;i++){

       for(let x=0;x<content.length;x++){

        if(i!==x && content[i]===content[x]){
            count++
       }
    }
        occurencesArray.push(count);
        count=1
    }
    for (let i = 0; i < occurencesArray.length; i++) {
        if (occurencesArray[i] === 1) {
            survivorIndex.push(i);
        }
    }
    //test 
    console.log(occurencesArray);
    console.log(survivorIndex);
    //test
    if (survivorIndex.length > 0) {
        return s[survivorIndex[0]];
    } else {
        return '';
    }
}

// upgraded version. 
function firstNonRepeatingLetter(s) {
    let lowerCaseString = s.toLowerCase();
    let charCount = {};

    // Compter les occurrences de chaque caractère
    for (let char of lowerCaseString) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Trouver le premier caractère non répétitif en conservant la casse
    for (let i = 0; i < s.length; i++) {
        if (charCount[lowerCaseString[i]] === 1) {
            return s[i];
        }
    }

    return '';
}

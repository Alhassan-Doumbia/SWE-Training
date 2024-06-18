function titleCase(title,minorWords){
    if(title===''){
        return '';
    }
    let words =title.toLowerCase().split(' ');
    let minorWordsArray = minorWords ? minorWords.toLowerCase().split(' ') : [];
    let finalTitle=words.map((word,index)=>{
        if(index===0 || !minorWordsArray.includes(word)){
            return word.charAt(0).toUpperCase()+word.slice(1);
        }
        else{
            return word
        }
    
    })
    return finalTitle.join(' ')
}
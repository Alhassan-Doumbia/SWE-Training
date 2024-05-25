function ListFilter(arrayToFilter){
    let result=arrayToFilter.filter((x)=>typeof(x)==="number")
    return result;
}
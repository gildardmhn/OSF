isOdd = function(a){
    if(a % 2 === 0)
        return true
    else 
        return false
}

myRandom = function(){
    return Math.floor(Math.random() * 1001)
}

moreThan5 = function(a){
    if(a > 5)
        return true
    else
        return false
}

fillArray = function(){
    let myArray = [];
    for(let i = 0; i< 5; i++){
        myArray.push(myRandom())
    }
    return myArray
}

module.exports = {
    isOdd,
    myRandom,
    moreThan5,
    fillArray
};
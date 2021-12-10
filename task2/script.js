function checkNumOfParam(arg1,arg2){
    if(arguments.length!=2){
        throw 'No Of parameter donnot exceed two parameter'
    }
    else{
        return arg1+arg2;
    }
}

console.log(checkNumOfParam(1,2))
console.log(checkNumOfParam(2))
console.log(checkNumOfParam(1,2,3))
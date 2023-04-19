function receivesAFunction(callback) {
 callback ("Hello, world!");
}

function returnsANamedFunction() {
    function elianasFunction () {
        console.log ("Hello I am Eliana/'s function")
    }
    return elianasFunction
}

function returnsAnAnonymousFunction (){
    return function () {
        
    }
}
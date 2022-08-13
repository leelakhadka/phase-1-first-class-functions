function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function person() {

    }
}

function returnsAnAnonymousFunction() {
    return () => { }
}
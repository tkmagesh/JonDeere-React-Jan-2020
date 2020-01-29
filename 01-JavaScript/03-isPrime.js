pure functions
    deterministic

f(x) => y
f(x1) => y1

function add(x,y){
    console.log('processing x and y');
    return x + y;
}


var z = 100
function add(x,y){
    return x + y + z;
}

add(10,20) => 130

z = 1000

add(10,20) => 1030

function isPrime(n){
    console.log('processing ', n);
    for(i = 2; i <= (n/2); i++)
        if (n % 2 === 0)
            return false;
    return true;
}

var isPrime = (function(){
    var cache = {};
    return function isPrime(n){
        if (typeof cache[n] !== 'undefined')
            return cache[n];
        console.log('processing ', n);
        cache[n] = true;
        for(i = 2; i <= (n/2); i++)
            if (n % 2 === 0){
                cache[n] = false;
                break;
            }
        return cache[n];
    }
})();

function isPrime(n){
    if (typeof isPrime[n] !== 'undefined')
        return isPrime[n];
    console.log('processing ', n);
    isPrime[n] = true;
    for(i = 2; i <= (n/2); i++)
        if (n % 2 === 0){
            isPrime[n] = false;
            break;
        }
    return isPrime[n];
}

var isPrime = (function(){
    
    function isPrime(n){
        if (typeof isPrime.cache[n] !== 'undefined')
            return isPrime.cache[n];
        console.log('processing ', n);
        isPrime.cache[n] = true;
        for(i = 2; i <= (n/2); i++)
            if (n % 2 === 0){
                isPrime.cache[n] = false;
                break;
            }
        return isPrime.cache[n];
    }

    isPrime.cache = {};

    return isPrime;
})();

function isPrime(n){
    if (typeof isPrime.cache === 'undefined')
        isPrime.cache = {};
    if (typeof isPrime.cache[n] !== 'undefined')
        return isPrime.cache[n];
    console.log('processing ', n);
    isPrime.cache[n] = true;
    for(i = 2; i <= (n/2); i++)
        if (n % 2 === 0){
            isPrime.cache[n] = false;
            break;
        }
    return isPrime.cache[n];
}
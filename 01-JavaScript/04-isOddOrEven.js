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


var isPrime = (function(){
    var cache = {};
    function process(n){
        for(i = 2; i <= (n/2); i++)
            if (n % 2 === 0){
                return false;
            }
        return true;
    }
    return function isPrime(n){
        if (typeof cache[n] !== 'undefined')
            return cache[n];
        console.log('processing ', n);
        cache[n] = process(n);
        return cache[n];
    }
})();



var isOddOrEven = (function(){
    var cache = {};
    return function isOddOrEven(n){
        if (typeof cache[n] !== 'undefined')
            return cache[n];
        console.log('processing ', n);
        cache[n] = n % 2 === 0 ? 'even' : 'odd';
        return cache[n];
    }
})();

var isOddOrEven = (function(){
    var cache = {};
    function process(n){
        return n % 2 === 0 ? 'even' : 'odd';
    }
    return function isOddOrEven(n){
        if (typeof cache[n] !== 'undefined')
            return cache[n];
        console.log('processing ', n);
        cache[n] = process(n);
        return cache[n];
    }
})();

function memoize(process){
    var cache = {};
    return function (n){
        if (typeof cache[n] !== 'undefined')
            return cache[n];
        console.log('processing ', n);
        cache[n] = process(n);
        return cache[n];
    }
}

var isPrime = memoize(function process(n){
    for(i = 2; i <= (n/2); i++)
        if (n % 2 === 0){
            return false;
        }
    return true;
});

var isOddOrEven = memoize( function process(n){
    return n % 2 === 0 ? 'even' : 'odd';
})
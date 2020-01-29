function memoize(process){
    var cache = {};
    return function (){
        var key = JSON.stringify(arguments);
        if (typeof cache[key] !== 'undefined')
            return cache[key];
        console.log('processing ', arguments);
        cache[key] = process.apply(undefined, arguments);
        return cache[key];
    }
}

var add = memoize(function(x,y){
    return x + y;
});
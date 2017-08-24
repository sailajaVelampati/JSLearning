//join two arrays

    var hege = ["Cecilie", "Lone", "Emil"];
    var stale = ["Emil", "Tobias", "Linus"];
    console.log(hege.concat(stale)); 

//join arrays with no duplicates
    
    Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

        return a;
    };
console.log(hege.concat(stale).unique());

//sum of all element in an array
var sum = [1, 2, 3].reduce((a, b) => a + b, 0);//
console.log(sum); // 6



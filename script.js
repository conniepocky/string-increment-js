

function stringincrement(str) { 

    var regex = new RegExp('([0-9]+)|([a-zA-Z]+)','g');
    var arr = str.match(regex);
    console.log(arr[0])

    if (arr.length == 1 && isNaN(Number(arr[0]))) {
        return arr[0] + "1";
    } 

    console.log(arr)

    var lastElement = arr[arr.length-1];
    lastElement = lastElement.split(/(0)/g).join('').split('');
    console.log(lastElement)

    for (var i = lastElement.length-1; i >= 0; i--) {
        if (lastElement[i] == "9") {
            if (i == 0) {
                lastElement[i] = "10";
            } else {
                lastElement[i] = "0";
            }
        } else {
            lastElement[i] = String(parseInt(lastElement[i]) + 1);
            break;
        }
    }

    if (arr.length == 1) {
        return lastElement.join('');
    }

    arr[arr.length-1] = lastElement.join('');

    return arr.join("");
    
}

console.log(stringincrement("fo99obar99"))
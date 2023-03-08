let array1 = ['Apple', 'Run', 'Doom', 'X', 'Z'];

function x(array1) {
    let out = "";

    for (let i = 0; i < array1.length; i++) {
        if (i == array1.length - 1) {
            out += '"' + array1[i] + '"';
        }
        else {
            out += "\"" + array1[i] + '", ';
        }
    }

    return '[' + out + ']';
}

console.log(x(array1));



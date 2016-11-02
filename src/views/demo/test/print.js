/**
 * Created by CY on 16/7/20.
 */

var arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];
var l = arr.length;
var i = 0;
function print() {
    if ( i < l) {
        console.log(arr[i]);
        setTimeout(
            'print()',
            1000
        );
        i++;
    }
}

print();
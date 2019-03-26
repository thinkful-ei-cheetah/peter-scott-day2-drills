/* eslint-disable indent */
/* eslint-disable no-empty */
/* eslint-disable strict */
function max(num) {
    if (num.length === 0){
        return undefined;
    }
    else{
    let max = num[0];
    let i=0;
    while (i < num.length) {
        if (max < num[i]){
            max = num[i];
        }
        i++;
    }
    return max;
}
}

let numb = [1,2,3,4,5,6];

// console.log(max(numb));

function min(num) {
    if (num.length === 0){
        return undefined;
    }
    else {
    let min = num[0];
    let i=0;
    while (i<num.length) {
        if (min > num[i]){
            min = num[i];
        }
        i++;
    }
    return min;
}
}

// console.log(min(numb));

function average(num) {
    let sum = 0;
    num.forEach((function(element) {
        sum += element;
      }));
    return sum / num.length;
}

console.log(average([1,2,3,4,5,6]));

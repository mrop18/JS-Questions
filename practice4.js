const arr = [9, 3, 5, 15, 8, 12];
let sum = 0;
let i = 0;
for (i=0; i<arr.length; i++){
    sum = sum + arr[i];

}
console.log(`Sum of all = ${sum}`);

let largest = 0;
for (i=0; i<arr.length; i++){
    if(arr[i]>largest){
        largest = arr[i]

    }
}


console.log(`Largest number  = ${largest}`);

let shortest = arr[0];
for (i=0; i<arr.length; i++){
    if(arr[i]<shortest){
        shortest = arr[i]

    }
}


console.log(`Shortest number  = ${shortest}`);


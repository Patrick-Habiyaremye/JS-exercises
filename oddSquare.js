// create tunction called oddSquares()
// filter the even number in array
// map the odd number to square
//oddSquares([1, 2, 3, 4, 5, 6]); // should return [1, 9, 25]
//oddSquares([10, 15, 20, 25, 30]); // should return [225, 625]

function oddSquares(number){
    return number.filter(num=> num % 2 !== 0).map(num=> num * num);
}
console.log(oddSquares([1,2,3,4,5,6]));
console.log(oddSquares([10, 15, 20, 25, 30]));
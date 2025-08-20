//You are given an array of product objects
// each containing a name (string) and a price (number) 
// Your task is to implement a function called sortProducts 
// that sorts the products based on their prices in ascending order. 

function sortProducts(products){
    return products.sort((a,b)=> a.price - b.price);
}
 product = [
    { name:"Telephone", price: 20000},
    { name:"laptop", price: 1000000},
    { name:"television", price: 80000}
];

console.log(sortProducts(product));
    
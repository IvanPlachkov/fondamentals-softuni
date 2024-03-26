let obj = {a:1,c:3,b:2}
let keys = Object.keys(obj).sort()
console.log(keys);

let obj1 = {a: {price: 2},c:{price: 1},b:{price: 0.5}}
let keys1 = Object.keys(obj1).sort((key1,key2)=>{return obj1[key1].price - obj1 [key2].price})
console.log(keys1);
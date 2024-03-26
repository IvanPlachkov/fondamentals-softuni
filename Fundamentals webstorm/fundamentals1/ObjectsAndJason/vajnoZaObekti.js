let cat= '5'
let obj1={}
obj1.cat = 15 // promenihme vutre v obekta stoinosta na cat
console.log(obj1);
obj1['cat']= 'b'
console.log(obj1);
console.log('-----------')
let obj = {name:'sofuni',age:3};
let keys = Object.keys(obj)
console.log(keys);//vadim klu4ovete
console.log('-----------')
let value = Object.values(obj)
console.log(value);//vadim stoinostite na klu4ovete
console.log('-----------')
if(obj.hasOwnProperty('name')){// proverqvame dali ima tozi klu4 i kakuv e
    console.log(obj.name);
}
console.log('-----------')
if(value.includes('sofuni')){//proverqva dumata dali se sudurja v values (stoinostite) i dava rezultat dali ima ili ne
    console.log('found sofuni');
}else{
    console.log('not found');
}
console.log('-----------')
let str = JSON.stringify(obj) // pravi celiq obekt zbit i na stringove
console.log(str);
console.log('-----------')
let str2=  JSON.parse(str)// obrushta go v purvona4alnite si 4isla i stringove
console.log(str2);
console.log('-----------')

let obj3 = {a:1,c:3,b:2}
let keys2 = Object.keys(obj3).sort() // просто сортиране по klu4 и азбучен ред za stringove
console.log(keys2);

let obj2 = {a: {price: 2},c:{price: 1},b:{price: 0.5}}
let keys1 = Object.keys(obj2) // тук сортираме и ги обръщаме отзад нарпред
    .sort((key1,key2)=>{return obj2[key1].price - obj2 [key2].price})
console.log(keys1);

console.log('-----------')
//Mnogo Vmeseni obekti
let polygon = {
    about:{name:'triangel',color:'red',},
    corner:[{x:2,y:6},{x:3,y:1},{x:-2,y:2}]
}
console.log(JSON.stringify(polygon));

console.log('-----------')
// intirirame po stoinost v obekta
let laptop ={Ram:'8GB',CPU:'i7 2,2'}
for (const keys in laptop) { // obektite rabotqt samo s for In cikli
    console.log(keys);
    console.log(laptop[keys]);
}
function solve(n,k){
    let result = [1]
for(let i =1;i < n; i++){
    let start = Math.max(0,i - k);// искам да вземеш максималното 0 или 0 или индекса в момента
    let sum = result.slice(start,i).reduce((a,b)=> a +b)// vzema ot starta na 4islata bez poslednoto,
    // .Reduce(a,b) vzima 2 po dva elementite , pravi operaciq s tqh dokato ne ostane samo 1 element;
result.push(sum);

}
    console.log(result.join(" "));


}solve(6,3)
solve(8,2)
function solve(str){
   let arr = JSON.parse(str) ;
   let result=`<table>\n  <tr>`
    for (let key in arr[0]) {// vurtin cigal vseki edin kluch
        result+=`<th>${key}</th>`// polzvat se kavi4kite do esc tilda ina4e nestava za HTML
    }
    result += `</tr>\n`
    for (let obj of arr) {
        result += `  <tr><td>${htmlEscape(obj[`name`])}</td><td>${htmlEscape(obj[`score` ]+``)}</td></tr>\n`

    }
    console.log(result +  "</table>");

    function htmlEscape(str) {
    return str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')

}

}solve('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]')
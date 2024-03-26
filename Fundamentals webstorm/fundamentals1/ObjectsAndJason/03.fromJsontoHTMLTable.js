
<!DOCTYPE html>

<html lang="en">

    <head>

    <meta charset="UTF-8">

    <title>FromJSONToHTMLTable</title>

<style>

    table,th{

    border: groove;

    border-collapse: collapse;

}

    td{

    border: 1px solid black;

}

    td,th{

    padding: 5px;

}

</style>

</head>

<body>

<div id="wrapper">

</div>

<script>

    function fromJSONToHTMLTable(input){
// ot tuk po4chva koda
    let arr = JSON.parse(input) ;
    let result=`<table>\n  <tr>`
    for (let key in arr[0]) {
    result+=`<th>${htmlEscape(key +'')}</th>`
}
    result+= `</tr>`
    for(let obj of arr){
    result +=`  <tr>`
    for(let objkey in obj){
    result += `<td>${htmlEscape(obj[objkey] + '')}</td>`

}
    result += `</tr>\n`
}
    console.log(result+= `</table>`)
    function htmlEscape(str) {
    return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

}

}
//do tuk
    window.onload = function(){
    let container = document.getElementById('wrapper'); container.innerHTML = fromJSONToHTMLTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']); }; </script> </body> </html>
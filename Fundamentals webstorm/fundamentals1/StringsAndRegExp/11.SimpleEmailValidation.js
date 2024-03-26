function solve(email){
let regex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/
let regex2 = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z]+\\.[a-zA-Z]+")// s tozi moje otvun da se vkara regex
    // sus komanda new RegExp (ime na regexa)

    if(regex.test(email)){
        console.log("valid")

    }else{
        console.log("invalid")
    }

}solve("valid@email.bg")
solve("invalid@emai1.bg") // tozi nego haresva zaradi 1cata poneje ne sme go dali da ima cifri nakraq
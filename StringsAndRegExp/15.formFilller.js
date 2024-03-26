function solve(username,email,phone,form){
        for (let line of form) {
              line = line.replace(/<![a-zA-Z]+!>/g,username)  // kolkoto puti sreshne tova da go zameni sus username
                line = line.replace(/<@[a-zA-Z]+@>/g,email)   // tuk go zamenq sus email
                line = line.replace(/<\+[a-zA-Z]+\+>/g,phone)
                console.log(line);
        }



}solve('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)'])
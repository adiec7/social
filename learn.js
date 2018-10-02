var dataBase = [
    {
        username: "Chris",
        password: "amake",
    },
    {
        username: "Tony",
        password: "mega",
    },
    {
        username: "flo",
        password: "adfox",
    }
];

var newsFeed = [
    {
        username: "Tony",
        timeLine: "am so rich",
    },
    {
        username: "chris",
        timeLine: "Andrei is the best instructor",
    },
    {
        username: "Dinah",
        timeLine: "chris is the best",
    },
];
var usernamePrompt = prompt("Enter your username");
var passwordPrompt = prompt("Enter your password");
function allusers(username,password){
    for(var i=0;i < dataBase.length; i++){
        if(dataBase[i].username===username && dataBase[i].password=== password){
            return true;
        }
    }
    return false;
}




function signIn(username,password){
    if (allusers(username,password)){
        console.log(newsFeed);
    }else{
        alert("wrong username or password");
    }

};
signIn(usernamePrompt,passwordPrompt);
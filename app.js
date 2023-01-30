function sendEmail(){
    Email.send({
    Host : " ",
    Username : " ",
    Password : " ",
    From : ' ',
    To : " ",
    Subject : "Mail",
    Body : "<html><style>body{background-color:red;}</style><h1>Hello my friend</h1><br><i>Wassup?</i></html>"
}).then(
  message => alert(message)
);
}

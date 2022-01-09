let userName = prompt("Who's there?");
if (userName == "Admin") {
//    yeu cau nhap mat khau
    let pass = prompt("Password?");
    if (pass == "TheMaster") {
        //    in ra chuoi Welcome
        alert("Welcome");
    } else if (pass == "null") {
        //    in ra chuoi Canceled
        alert("Canceled");
    } else {
        //    in ra chuoi Wrong password
        alert("Wrong password");
    }
} else if (userName == "null") {
//    in ra chuoi canceled
    alert("Canceled");
} else {
//    in ra chuoi "I don't know you"
    alert("I don't know you");
}
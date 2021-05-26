function login(){
    var x=document.hello.username.value;;
    var y=document.hello.possword.value;
    if(x=="ashok" && y=="1234" || x=="abhi" && y=="ananya" || x=="rakesh" && y=="prism" || x=="narasimha" &&y=="adurinti")
    {
        location.href="time.html";
    }
    else if(x=="" && y=="")
    {
        alert("Enter Cheyyali kada");
    }
    else
    {
        alert("correct enter cheyee");
    }
}
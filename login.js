function ajax_post(){
    var x = new XMLHttpRequest();
    var x1 = document.getElementById('username').value;
    var x2 = document.getElementById('password').value;
    var res = "username"+x1+"password"+x2;
    x.onreadystatechange = function(){
        if(x.readyState==4&&x.status==200){
            document.getElementById("start").innerHTML = x.responseText;
        }
    };
    x.open("POST","",true);
    x.setRequestHeader
    x.send(res);
    document.getElementById("start").innerHTML = "Processing!";

}
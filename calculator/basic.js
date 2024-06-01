function cal(){
    var var1=document.getElementById("first").value;
    var var2=document.getElementById("second").value;
    var ope=document.getElementById("ope").value;
    if(ope=="+"){
        document.getElementById("res").value=parseInt(var1)+parseInt(var2);
    }
    if(ope=="-"){
        document.getElementById("res").value=parseInt(var1)-parseInt(var2);
    }
    if(ope=="*"){
        document.getElementById("res").value=parseInt(var1)*parseInt(var2);
    }
    if(ope=="-"){
        document.getElementById("res").value=parseInt(var1)/parseInt(var2);
    }
}
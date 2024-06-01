const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower="abcdefghijklmnopqrstuvwxyz";
const num="1234567890";
const symbol="!@#$%^&*()_-+/?"
const upperinp=document.getElementById("upper-case");
const lowerinp=document.getElementById("lower-case");
const numinp=document.getElementById("numbers");
const symbolinp=document.getElementById("symbols");
const totalchar=document.getElementById("total-char");
const passbox=document.getElementById("pass-box");
var password="";
function getchar(dataset){
    return dataset[Math.floor(Math.random() * dataset.length)];
}

const genpwd = (password="") => {
    if(upperinp.checked){
        password+=getchar(upper);
    }
    if(lowerinp.checked){
        password+=getchar(lower);
    }
    if(numinp.checked){
        password+=getchar(num);
    }
    if(symbolinp.checked){
        password+=getchar(symbol);
    }
    if(password.length<totalchar.value){
        return genpwd(password);
    }
    else{
        passbox.innerText=truncateString(password,totalchar.value);
        return;
    }
}
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}
document.getElementById("btn").addEventListener(
    "click",
    function(){
        genpwd(password);
    }
)
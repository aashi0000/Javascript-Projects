const no_optn=["r u sure","sacchi mei??","loser haan krdo","maroge ab tum","plisplisplis","ab mai gussa hu","gande bacche :("];
const no_gif=[
    "https://media.tenor.com/XShX1uoalz4AAAAM/i-miss-you.gif",
    "https://media.tenor.com/fcwFGDYL_HAAAAAM/quby-chan-cute.gif",
    "https://media.tenor.com/I3dzAXpujPQAAAAM/cry.gif",
    "https://media.tenor.com/tMYhdjADF4AAAAAM/seal-hibo.gif"
];
let index=0;
function yes(){
    document.getElementById("puura").innerHTML=`
    <div class="text-ques">
            <h1>TENKEWWWWWWWWWWWW</h1>
            <h2>you're a good kiddo ;)</h2>
    </div>
    `
    document.getElementById("img").innerHTML=`
    <img id="actual-img" src="https://media1.tenor.com/m/J4WA4IXVeBQAAAAC/love-you.gif">
    `
    document.getElementById("actual-img").style.width='400px';
    document.getElementById("actual-img").style.height='auto';
    
}
function no(){
    document.getElementById("no-btn").innerText=no_optn[(index++)%7];
    document.getElementById("actual-img").src=no_gif[(index%4)];
    var wid= 150+ index*7;
    var hei =40+ index*7;
    var tex= 15 +index*5;
    document.getElementById('yes-btn').style.width = wid + 'px';
    document.getElementById('yes-btn').style.height = hei + 'px';
    document.getElementById('yes-btn').style.fontSize = tex +'px';
}

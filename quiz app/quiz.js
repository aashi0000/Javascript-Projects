const questions= [{
    'que': 'Who was the father of computer?',
    'a' : 'Charlie Babbage',
    'b' : 'Dennis Ritchie',
    'c':'Charles Babbage',
    'd':'Ken Thompson',
    'correct':'c'
},
{
    'que': 'What is the full form of CPU?',
    'a' : 'Central Process Unit',
    'b' : 'Central Processing Unit',
    'c':'Central Programming Unit',
    'd':'Central Progressive Unit',
    'correct':'b'
},
{
    'que': 'Which electronics component is used in first generation computers?',
    'a' : 'Transistors',
    'b' : 'ULSI Chips',
    'c':'Vacuum Tubes',
    'd':'LSI Chips',
    'correct':'c'
},
{
    'que': 'What is the full form of OCR?',
    'a' : 'Optical Character Reader',
    'b' : 'Optical Central Reader',
    'c':'Optimized Character Reader',
    'd':'Optical Character Response',
    'correct':'a'
},
{
    'que': 'Which is the smallest memory measurement unit in given options?',
    'a' : 'Byte',
    'b' : 'Micro Byte',
    'c':'Kilo Byte',
    'd':'Nibble',
    'correct':'d'
}
];
let index=0;
let total=questions.length;
const quesbox=document.getElementById("quesbox");
const optioninp=document.querySelectorAll(".options");
let right=0;
let wrong=0;
function loadques(){
    if(index == total){
        return endquiz();
    }
    reset();
    const data=questions[index];
    console.log(data);
    quesbox.innerText=`${index+1})${data.que}`;
    optioninp[0].nextElementSibling.innerText=data.a;
    optioninp[1].nextElementSibling.innerText=data.b;
    optioninp[2].nextElementSibling.innerText=data.c;
    optioninp[3].nextElementSibling.innerText=data.d;
}
function reset(){
    optioninp.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}
function getanswer(){
    let answer;
    optioninp.forEach(
        (input)=>{
            if(input.checked){
                answer= input.value;
            }
        }
    )
    return answer;
}
function submitquiz(){
    const data=questions[index];
    const ans=getanswer();
    if(ans==data.correct){
        right++;
        alert("correct answer :)");
    }
    else{
        wrong++;
        alert("wrong answer :(");
    }
    index++;
    loadques();
    return;

}
function endquiz(){
    document.getElementById("box").innerHTML=`
    <h4>Thankyou for playing the quiz :)</h4>
    <br>
    <h2>${right}/${total} are correct</h2>
    `
}
loadques();

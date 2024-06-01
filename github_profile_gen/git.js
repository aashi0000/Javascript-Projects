const apiurl="https://api.github.com/users/";
const main=document.querySelector("#main");
const user=document.getElementById("search");
async function getuser(username){
    const response= await fetch(apiurl+username);
    const data= await response.json();
    if(data.name==undefined){
        const card=`
    <div class="card">
    <div class="unf">
        <h4 >Error!</h4>
    <div class="unf">
        <h1 >User not found</h1>
    <div>
    <div class="unf">
        <h3 >Please try again</h3>
    </div>
    </div>
    </div>
    `;
    main.innerHTML=card;
    return;
    }
    const card=`
    <div class="card">
        <div>
            <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
        </div>
        <div class="user-info">
            <h2>${data.name}</h2>
            <p>${data.bio}</p>

            <ul class="info">
                <li>${data.followers}<strong>Followers</strong></li>
                <li>${data.following}<strong>Following</strong></li>
                <li>${data.public_repos}<strong>Repos</strong></li>
            </ul>

            <div id="repos">
                
            </div>
        </div>
    </div>
    `;
    main.innerHTML=card;
    getrepos(username);
}
async function getrepos(username){
    const repos= document.querySelector("#repos")
    const response= await fetch(apiurl+username+"/repos");
    const data= await response.json();
    data.forEach((item) => {
        console.log(item);
        const elem=document.createElement("a");
        elem.className="repo";
        elem.href=item.html_url;
        elem.innerText=item.name;
        elem.target="_blank";
        repos.appendChild(elem);
    });
}
function formSubmit(){
    if(user.value!=""){
        getuser(user.value);
        user.value="";
    }
    return false;
}
user.addEventListener(
    "focusout",
    function(){
        formSubmit();
    }
)



const linksDiv = document.getElementsByClassName("links")[0];
linksDiv.classList.add("index");

let links= [];

let addNewLink = (link, namea)=>{
    links.push({link, namea});
    const btn = document.createElement("button");
    btn.innerHTML=namea;

    const linkDiv = document.createElement('div');
    linkDiv.classList.add("link");

    btn.onclick = (ev) =>{
        open(link, "_blank");
    }

    linkDiv.appendChild(btn);
    linksDiv.appendChild(linkDiv);
}

addNewLink("https://github.com/rootamin", "GitHub");
addNewLink("https://www.youtube.com/", "YouTube");
addNewLink("https://www.twitch.tv/", "Twitch");
addNewLink("https://mail.google.com/mail/u/0/#inbox", "Gmail");
addNewLink("https://twitter.com/home", "Twitter");
addNewLink("https://kick.com/", "Kick");


const linksDiv = document.getElementsByClassName("links")[0];
linksDiv.classList.add("index");

let links = [];

let addNewLink = (link, name, logoUrl) => {
    links.push({ link, name, logoUrl });

    const linkDiv = document.createElement('div');
    linkDiv.classList.add("link");

    const linkBtn = document.createElement("button");
    linkBtn.style.display = "flex"; // Set the button to use flex layout
    linkBtn.style.alignItems = "center"; // Align the content vertically in the center
    linkBtn.style.justifyContent = "center"; // Align the content horizontally in the center

    const logoImg = document.createElement('img');
    logoImg.src = logoUrl;
    logoImg.alt = name + " Logo";
    logoImg.style.width = "32px"; // Set the width of the logo image to 32 pixels
    logoImg.style.height = "32px"; // Set the height of the logo image to 32 pixels

    const nameSpan = document.createElement('span');
    nameSpan.style.marginLeft = "15px"; // Add left margin to create space between logo and name
    nameSpan.innerText = name;

    linkBtn.appendChild(logoImg); // Append the logo image inside the button
    linkBtn.appendChild(nameSpan); // Append the website name inside the button

    linkBtn.onclick = (ev) => {
        open(link, "_blank");
    }

    linkDiv.appendChild(linkBtn);
    linksDiv.appendChild(linkDiv);
}

addNewLink("./iran_international.html", "ایران اینترنشنال", "./pics/irint.png");
addNewLink("./voa.html", "صدای آمریکا", "./pics/voa.png");
addNewLink("./itn.html", "آی تی ان", "./pics/itn.png");
addNewLink("./radioj.html", "رادیو جوان", "./pics/radioj.png");
addNewLink("./pmc.html", "پی ام سی", "./pics/pmc.png");
addNewLink("./mbc_persia.html", "ام بی سی پرشیا", "./pics/mbc_persia.png");
addNewLink("./redbull.html", "RedBull", "./pics/redbull.png");


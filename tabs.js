import {jsonData} from "./jsonData.js";

const tablist = document.querySelector("[role = 'tablist']");
const tabs = tablist.querySelectorAll("[role = 'tab' ]");
let tabFocus = 0;


tablist.addEventListener("keydown", (e) => changeFocus(e));

const changeFocus = (e) =>{
    const keydownLeft = 37;
    const keydownRight = 39;
    if(e.keyCode === keydownRight || e.keyCode === keydownLeft){
        tabs[tabFocus].setAttribute("tabindex", -1);
        if(e.keyCode === keydownRight){
            tabFocus++;
            if(tabFocus >= tabs.length){
                tabFocus = 0;
            }
        }
        else{
            tabFocus--;
            if(tabFocus < 0){
                tabFocus = (tabs.length - 1);
            }
        }  
    }
    
    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
}


tabs.forEach((tab)=>{
    tab.addEventListener("click", () => switchTab(tab));
})

const switchTab = (tab)=>{
    tablist.querySelector("[aria-selected = 'true']").removeAttribute("aria-selected");
    tab.setAttribute("aria-selected", "true");
    const tabPanel = tab.getAttribute("aria-controls");
    const mainContent = tablist.parentNode;
    const bodyClassAtrr = mainContent.parentNode.getAttribute("class");
    if(bodyClassAtrr ==="destination"){
        switchDestinationContent(tabPanel, mainContent);
    }
    else if(bodyClassAtrr ==="crew"){
        switchCrewContent(tabPanel, mainContent);
    }
    else if(bodyClassAtrr ==="technology"){
        switchTechContent(tabPanel, mainContent);
    }
    
}

const switchDestinationContent = (destinationTab, mainContent)=>{

    const moonContent = jsonData.destinations[0];
    const marsContent = jsonData.destinations[1];
    const europaContent = jsonData.destinations[2];
    const titanContent = jsonData.destinations[3];

    const article = mainContent.querySelector("article");
    const image = mainContent.querySelector("img");
    const name = article.querySelector("[data-value = 'name']");
    const description = article.querySelector("[data-value='description']");
    const distance = article.querySelector("[data-value ='distance']");
    const travelTime = article.querySelector("[data-value ='travel-time']");

    switch (destinationTab) {
        case "moon-tab":
            name.innerHTML = moonContent.name;
            description.innerHTML = moonContent.description;
            distance.innerHTML = moonContent.distance;
            travelTime.innerHTML = moonContent.travel;
            image.setAttribute("src", moonContent.images.png);
            break;

        case "mars-tab" :
            name.innerHTML = marsContent.name;
            description.innerHTML = marsContent.description;
            distance.innerHTML = marsContent.distance;
            travelTime.innerHTML = marsContent.travel;
            image.setAttribute("src", marsContent.images.png);
            break;

        case "europa-tab" :
            name.innerHTML = europaContent.name;
            description.innerHTML = europaContent.description;
            distance.innerHTML = europaContent.distance;
            travelTime.innerHTML = europaContent.travel;
            image.setAttribute("src", europaContent.images.png);
            break;

        case "titan-tab" :
            name.innerHTML = titanContent.name;
            description.innerHTML = titanContent.description;
            distance.innerHTML = titanContent.distance;
            travelTime.innerHTML = titanContent.travel;
            image.setAttribute("src", titanContent.images.png);
            break; 

        default:
            break;
    }
}

const switchCrewContent = (crewTab, mainContent) =>{
    const article = mainContent.querySelector("article");
    const role = article.querySelector("[data-value = 'role']");
    const name = article.querySelector("[data-value ='name']");
    const bio = article.querySelector("[data-value ='bio']");
    const image = mainContent.querySelector("img");

    const commanderContent = jsonData.crew[0];
    const specialistContent = jsonData.crew[1];
    const pilotContent = jsonData.crew[2];
    const engineerContent = jsonData.crew[3];

    switch (crewTab) {
        case "commander":
            role.innerHTML = commanderContent.role;
            name.innerHTML = commanderContent.name;
            bio.innerHTML = commanderContent.bio;
            image.setAttribute("src", commanderContent.images.png);
            break;
        case "specialist":
            role.innerHTML = specialistContent.role;
            name.innerHTML = specialistContent.name;
            bio.innerHTML = specialistContent.bio;
            image.setAttribute("src", specialistContent.images.png);
            break;
        case "pilot":
            role.innerHTML = pilotContent.role;
            name.innerHTML = pilotContent.name;
            bio.innerHTML = pilotContent.bio;
            image.setAttribute("src", pilotContent.images.png);
            break;
        case "engineer":
            role.innerHTML = engineerContent.role;
            name.innerHTML = engineerContent.name;
            bio.innerHTML = engineerContent.bio;
            image.setAttribute("src", engineerContent.images.png);
            break;            
        default:
            break;
    }
}

const switchTechContent= (techTab, mainContent) =>{
    const launchVechicleContent = jsonData.technology[0];
    const spacePortContent = jsonData.technology[1];
    const spaceCapsuleContent = jsonData.technology[2];

    const article = mainContent.querySelector("article");
    const images =mainContent.querySelectorAll("img");
    const name = article.querySelector("[data-value= 'name']");
    const description = article.querySelector("[data-value='description']");

    switch (techTab) {
        case "launch-vechicle":
            name.innerHTML = launchVechicleContent.name;
            description.innerHTML = launchVechicleContent.description;
            images[0].setAttribute("src", launchVechicleContent.images.landscape);
            images[1].setAttribute("src", launchVechicleContent.images.portrait);
            break;

        case "space-port":
            name.innerHTML = spacePortContent.name;
            description.innerHTML = spacePortContent.description;
            images[0].setAttribute("src", spacePortContent.images.landscape);
            images[1].setAttribute("src", spacePortContent.images.portrait);  
            break;

        case "space-capsule":
            name.innerHTML = spaceCapsuleContent.name;
            description.innerHTML = spaceCapsuleContent.description;
            images[0].setAttribute("src", spaceCapsuleContent.images.landscape);
            images[1].setAttribute("src", spaceCapsuleContent.images.portrait); 
            break;
       
    
        default:
            break;
    }
}


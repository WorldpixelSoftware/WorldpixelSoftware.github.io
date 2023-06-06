window.onload = onPageLoaded;

function onPageLoaded(){
    var copyrightElement = document.getElementById("copyright");
    var currentYear = new Date().getFullYear();
    copyright.innerText = `Copyright \u00A9 Worldpixel Software 2022 - ${currentYear}`;
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

function changeLanguageTo(language){
    if(language != "de" && language != "en") return;
    var siteLinkComponents = window.location.href.split('/');

    var languageIndex = 0;
    
    for (let i = 0; i < siteLinkComponents.length; i++) {
        if(siteLinkComponents[i].length != 2) continue;
        languageIndex = i;
        break;   
    }

    /*Todo change to https when website is live*/
    var newLink = `https://${siteLinkComponents[languageIndex - 2]}/${siteLinkComponents[languageIndex-1]}/${language}`;

    for(let i = languageIndex + 1; i < siteLinkComponents.length; i++){
        newLink += `/${siteLinkComponents[i]}`;
    }

    /*Todo check if page exists!*/
    window.location.href = newLink;
}
window.onload = onPageLoaded;

function onPageLoaded(){
    var language = window.navigator.userLanguage || window.navigator.language;
    if(language.startsWith('de')){
        window.location.href = "de/home"; /*Todo, change to de/home.html when ready*/
        return;
    }

    window.location.href = "en/home";
}
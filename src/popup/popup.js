import {getRandomItem} from "../utils.js";

const subtitles = [
    "Pro čtení Novinek bez zvýšeného tlaku...",
    "Pro čtení příspěvků Miroslavy Tymlové",
    "Pro čtení diskuzí bez újmy na zdraví"
]

function registerCallback(id, fun) {
    const element = document.getElementById(id);
    element.addEventListener('change', fun);
}

function onTemporaryOffChanged() {

}

function onWebBannedChanged() {
    
}

function onHideOriginalChanged() {

}

function init() {
    document.getElementById("subtitle").innerText = getRandomItem(subtitles);
    registerCallback("temporaryOff", onTemporaryOffChanged)
    registerCallback("webBanned", onWebBannedChanged)
    registerCallback("hideOriginal", onHideOriginalChanged)
}

init();

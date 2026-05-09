import {getRandomItem} from "../utils";

const subtitles = [
    "Pro čtení Novinek bez zvýšeného tlaku...",
    "Pro čtení příspěvků Miroslavy Tymlové",
    "Pro čtení diskuzí bez újmy na zdraví"
]

function registerCallback(id: string, fun: () => void) {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener('change', fun);
    }
}

function onTemporaryOffChanged() {

}

function onWebBannedChanged() {
    
}

function onHideOriginalChanged() {

}

function init() {
    document.getElementById("subtitle")!.innerText = getRandomItem(subtitles);
    registerCallback("temporaryOff", onTemporaryOffChanged)
    registerCallback("webBanned", onWebBannedChanged)
    registerCallback("hideOriginal", onHideOriginalChanged)
}

init();

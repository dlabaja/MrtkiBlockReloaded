import {getRandomItem} from "../../utils/random-utils";

const subtitles = [
    "Pro čtení Novinek bez zvýšeného tlaku...",
    "Pro čtení příspěvků Miroslavy Tymlové",
    "Pro čtení příspěvků Zdeňka Svobody",
    "Pro čtení diskuzí bez újmy na zdraví",
    "Pro blokování hnoje na webu",
    "Pro sledování porna bez zmínky Rajchlova jména",
]

document.getElementById("subtitle")!.innerText = getRandomItem(subtitles)!;
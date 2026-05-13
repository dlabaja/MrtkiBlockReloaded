# MrtkiBlock Reloaded
## Rewrite původního rozšíření MrtkiBlock od [branik.v.akci](https://www.facebook.com/branikvakci)

Původní rozšíření bylo naposledy aktualizováno v roce 2021, politická situace se od té doby ale dost změnila. Abych i dále mohl bez starostí otevírat Novinky, rozhodl jsem se ho přepsat a dát open source.

Pro debugging jsem použil [web-ext](https://www.npmjs.com/package/web-ext?activeTab=readme).

Pro hledání používám [Aho-Corasick](https://cs.wikipedia.org/wiki/Algoritmus_Aho-Corasick) algoritmus s bounding znaky na začátku a konci matche. Tady je fajn [tutoriál](https://www.youtube.com/watch?v=O7_w001f58c&t=282s&pp=ygUMYWhvIGNvcmFzaWNr).

Data ukládám ve JSON formátu do storage.

Rozšíření se skládá ze dvou částí - Background skript (běží od startu prohlížeče, uchovává trie a data) a Content skript (per-page, má přístup k DOMu). Mezi sebou komunikují pomocí zpráv, oba mají oddělené kontexty. 
# MrtkiBlock Reloaded
## Rewrite původního rozšíření MrtkiBlock od [branik.v.akci](https://www.facebook.com/branikvakci)

Původní rozšíření bylo naposledy aktualizováno v roce 2021, politická situace se od té doby ale dost změnila. Abych i dále mohl bez starostí otevírat Novinky, rozhodl jsem se ho přepsat a dát open source.

Pro debugging jsem použil [web-ext](https://www.npmjs.com/package/web-ext?activeTab=readme)
Pro hledání používám [Aho-Corasick](https://cs.wikipedia.org/wiki/Algoritmus_Aho-Corasick) algoritmus s bounding znaky na začátku a konci matche
Data ukládám ve JSON formátu do storage
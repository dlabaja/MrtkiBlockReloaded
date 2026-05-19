![icon128.png](src/assets/icon128.png)

<a href="https://discord.gg/6nWXgvEZJF"><img src="https://camo.githubusercontent.com/8c0fca73564f21d7a6f235747eb4d739a2e4aaa348b8e074904127baeb944b9e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446973636f72642d3538363546323f7374796c653d666f722d7468652d6261646765266c6f676f3d646973636f7264266c6f676f436f6c6f723d7768697465" alt="Discord link" style="height: 28px; border-radius: 4px;"></a>
<a href="https://buymeacoffee.com/dlabaja"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 28px;"></a>

# MrtkiBlock Reloaded
## Rewrite původního rozšíření [MrtkiBlock](https://addons.mozilla.org/cs/firefox/addon/mrtkiblock/) od [branik.v.akci](https://www.facebook.com/branikvakci)

Blokování hnoje na webu - přepisuje jména (nejen) politiků na jejich přezdívky, aby vám při čtení Novinek nestoupal tlak...

Původní rozšíření bylo naposledy aktualizováno v roce 2021, politická situace se od té doby ale dost změnila. Abych i dále mohl bez starostí otevírat Novinky, rozhodl jsem se ho přepsat a dát open source.

Pro debugging jsem použil [web-ext](https://www.npmjs.com/package/web-ext?activeTab=readme).

Pro hledání používám [Aho-Corasick](https://www.youtube.com/watch?v=O7_w001f58c&t=282s&pp=ygUMYWhvIGNvcmFzaWNr) algoritmus s bounding znaky na začátku a konci matche. Zároveň se podle předložek snažím uhodnout správný pád jména.

Rozšíření se skládá ze tří částí - Background skript (běží od startu prohlížeče, uchovává trie a data), Content skript (per-page, má přístup k DOMu) a Popup (konfigurace). Mezi sebou komunikují pomocí zpráv (Popup -> Background <-> Content), každý má oddělený kontext.

## Jak přispět:
**Všechna data jsou v souborech data/items/*jmeno*.json**. Stačí vytvořit soubor s novým jménem podle schématu nebo aktualizovat již existující. Potom vyplníte kolonky pro všechny pády a přídavná jména.

Nápady na jména a přezdívky můžete psát i na [Discord](https://discord.gg/6nWXgvEZJF).

Matches = co se nahrazuje, Replacements = za co se to nahradí. Pozor na mezery a velká/malá písmena!

Rozšíření si bere data z data/data.json. Ten generuji automaticky ze souborů v items, proto ho prosím neupravujte. Rozšíření si ho po startu umí samo stáhnout z GitHubu.
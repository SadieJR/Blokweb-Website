# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details>
<summary>uitwerken voor kick-off werkgroep</summary>

### Auteur:
Sadie Roberts

#### Je startniveau:
Blauw

#### Je focus:
Surface Plane
 
</details>





## Je website

<details>
<summary>uitwerken voor kick-off werkgroep</summary>

### Je opdracht:
https://mocomuseum.nl/over-het-museum/ 

#### Screenshot(s) van de eerste pagina (small screen): 
Begin pagina 
<img src="images/MocoWebsite.jpg" width="375px" alt="Begin van de pagina">

#### Screenshot(s) van de tweede pagina (small screen):
Exposities
<img src="images/Barcelona.png" width="375px" alt="omschrijving van de pagina">
<img src="images/Info.png" width="375px" alt="expositie informatie">
<img src="images/Moco Masters.png" width="375px" alt="verhaal over de moco masters">

</details>



## Breakdownschets (week 1)

<details>
<summary>uitwerken na afloop 2e werkgroep</summary>

### de hele pagina: 
<img src="images/Indeling-Website-Moco.png" width="375px" alt="breakdown van de hele pagina">

### dynamisch deel (bijv menu): 
<img src="images/Hamburgermenu.png" width="375px" alt="breakdown van een dynamisch deel">

<img src="images/Menu.indeling.png" width="375px" alt="breakdownschets van een dynamisch deel">

### wellicht nog een dynamisch deel (bijv filter): 

</details>





## Voortgang 1 (week 2)

<details open>
<summary>uitwerken voor 1e voortgang</summary>

### Stand van zaken
De breakdownschets is goed gelukt en klopt. Ik weet de HTML opbouw van de pagina en heb deze ook bijna volledig uitgewerkt. Ik heb erg veel moeite met het beginnen met CSS, omdat mijn website veel gebruik maakt van vormen en beweging. Bij het vragen om hulp ben ik goed opweg geholpen/gekomen.  

### Agenda voor meeting
samen met je groepje opstellen

| student 1       | student 2          | student 3              | student 4                    |
|    MARIJN       | TESSA              | DANA                   | SADIE                        |
| -------------   | --------           | ---------              | -------------                |
| HTML video      | Nog geen vragen    | meerdere button styling|  Rondje maken in een section |
| Achtergrond img |                    | slideshow afbeeldingen |  Gradient achtergrond met kleine rondjes |


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- Met behulp van CSS moet ik de cirkel maken, met een class.
- Class: "witRondje".
- Background-image: radial-gradient(circle closest-side, white 100%, transparent 100%);
- Alles sections zijn een link bij mij.
- Roze achtergrond met rode kleinere stippen: background-image: radial-gradient(red 50%, pink 50%);
  background-size: 1em 1em;

</details>





## Voortgang 2 (week 3)

<details>
<summary>uitwerken voor 2e voortgang</summary>

### Stand van zaken
Ik heb verschillende dingen uitgeprobeerd met CSS, maar loop al snel tegen kleine foutjes aan waardoor ik niet verder kom. Voorafgaand de meeting had ik nog geen vragen, omdat ik nog niet heel ver was. Tijdens de meeting heb ik toch nog wat dingen kunnen vragen, bijvoorbeeld over de language linkjes waar ik veel aanhad en vervolgens verder kon met waar ik gebleven was. 


### Agenda voor meeting
samen met je groepje opstellen
 
| student 1           | student 2              | student 3                       | student 4              |            
| MARIJN              | TESSA                  | DANA                            |SADIE                   |
| geen vragen vooraf  | Afbeelding sticky      | Files verwijderen van github    | "/" tussen een lijstje |
|                     | Slideshow afbeeldingen |                                 | lijn onder een link    |


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- Slash moet in de html in de list.
- Met CSS stylen.
- Border-bottom.
- :after & :hover gebruiken.

</details>


## Toegankelijkheidstest (week 4)

<details>
<summary>uitwerken na test in 8e voortgang</summary>

### Bevindingen
Test 1. Screenreader
- Tijdens het screenreaden vond ik het persoonlijk zelf aan de ene kant duidelijk, maar aan de andere kant ook niet duidelijk. Je krijgt soms verschillende HTML elementen te horen en niet iedereen weet wat dat is. Aan de andere kant wordt weer duidelijk aangegeven waar je nu bent en wat je vervolgens moet doen. 
- Het aanpassen van de stem is belangrijk en is op eigen voorkeur. 
- De structuur van de Headings is voor een screenreader misschien niet altijd logisch, maar voor de indeling wel. 
- De linkjes zijn zelf al best duidelijk beschrijven. 

Test 2. Muis en toetsenbord
- Het is niet bij alles duidelijk of het klikbaar is
- Vaak zijn de hover states "omgekeerd": ipv dat er een lijntje te voor schijn komt, gaat die juist weg als je over een linkje bijvoorbeeld heen hovert. 
- De elementen worden in een logische volgorde geslecteerd. 
- Niet alle states zijn uitgewerkt. 
- Alles kan wel geselecteerd en bediend worden met het toetsenbord. 

Test 3. Diverse beperkingen
- Visuele beperkingen:
- het is moeilijker om kleine dingen te lezen en lastige om kleuren te onderscheiden als er veel van de zelfde kleuren worden gebruikt of als er weinig contrast is. Bij de site van Moco musuem  wordt er veel roze gebruikt en is dus soms moeilijker te onderscheiden. Wel wordt er gebruik gemaakt van zwart wat dus wel weer een contrast creeert. 
- De site maakt veel gebruik van grote titels wat wel fijn is, de kleinere teksten zijn moeilijker te lezen van een visuele beperking. 
- Slechte motoriek:
- het is soms lastig bepaalde handelingen uit te voeren. 
- over het algemeen is het opzich wel makkelijk om door de website heen te gaan. 
- Met typen doe je er wat langer over, maar je hoeft niks te typen, je hebt vaak keuze uit een drop-down menu. 
- Concentratie problemen 
- Door het gebruik van de grote titel is het opzich niet lastig om er snel achter te komen waar de pagina over gaat. Soms is het wel even zoeken waar je nou heen moet als je een specifiek iets zoekt. Doordat er opzich wel wat beweging te zien is in de website, kan de gebruiker zich misschhien minder goed concentreren. 
- Op de meeste pagina's staat niet veel tekst, behalve als je meer informatie wilt lezen bij exposities. 
- Spasme/parkinson
- Over het algemeen is het al best lastig om te bewegen met spasme of parkinson.
- Op de site heb je niet perse veel kleine buttons en linkjes en zijn over het algemeen wel groot genoeg om "mis te schieten". Bijvoorbeeld de blokken die te zien zijn bij het begin zijn volledig klikbaar en je hoeft dus niet op een bepaald deel perse te klikken. 
- Bij het boeken van tickets kunnen denk is de meeste problemen plaats vinden, omdat je daar wel wat kleinere elementen hebt, maar ook hier vind ik dat deze genoeg ruimte nemen. 

<img src="basiswebsite/images/mococontrast.png" width="375px" alt="Begin van de pagina">

<img src="basiswebsite/images/contrasten.png" width="375px" alt="Begin van de pagina">

Hier zie je het verschil tussen de bestaande website en mijn beetje aangepaste design. Moco maakt gebruik van verschillende tinten roze. Met iemand met een visuele beperking kan dit erg lastig te onderscheiden zijn, daarom heb ik er voor gekozen om grotere contrasten met lichte en donkere kleuren te gebruiken. 

<img src="basiswebsite/images/before.png" width="375px" alt="Begin van de pagina">

<img src="basiswebsite/images/tekstshadow.png" width="375px" alt="Begin van de pagina">

Door tekst shadow toe te voegen is de tekst in het wit beter te zien en springt dit er meer uit. De achtergrond is druk, maar de shadow zorgt ervoor de de tekst beter te lezen is. Ook de grootte van de font is groter gemaakt, zo is het nog makkelijker leesbaar. 


#### Screenreader
- Misshien content meer onderelkaar laten gaan.
- Alle elementen een 'uitgebreidde' betekenis of omschrijving geven, zoals buttons met een toevoegende beschrijvende teskt in css die niet perse zichtbaar hoeft te zijn op de site (aria-hidden).
- Omschrijvende labels
- Tekst op buttons
- HTML structuur op orde. 


#### Muis en toetsenbord
 


#### Diverse beperkingen
- Groter kleurcontrast (tekst en achtergrond)
- Ander kleur gebruik
- Grotere lettertypes
- Geen tekst op afbeeldingen
- tekst in kleurvlakken
- Visueel duidelijk maken waar de gebruiker zich bevindt. 


#### Concentratie problemen
- Minder bewegende elementen of minder groot. 
- Geen teskt of extra elementen als schaduw of border om afbeeldingen heen.


</details>





## Voortgang 3 (week 4)

<details>
<summary>uitwerken voor 3e voortgang</summary>

### Stand van zaken
Ik was goed opweg met de eerste pagina. De blokken begonnen zich te vormen en de gewenste effecten met :hover ontstonden. Ik moet een begin gaan maken met de tweede pagina.


### Agenda voor meeting
samen met je groepje opstellen

| student 1      | student 2          | student 3    | student 4                              |
| MARIJN         | TESSA      | DANA         |SADIE                                                |
| video invoegen  | afbeelding meebewegen| formulier en verschillende tekst vakken
| en dat ook nog | dit als er tijd is | nog een punt | sections naast elkaar als breder wordt |
| ...            | ...                | ...          | ...                                    |


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- Wat er klinkbaar is klikbaar maken (links)
- Aria labels, aangeven wat is iets (voor screenreading oplossing)
- Headings neerzetten en dan die doorzichtig maken 

</details>





## Eindgesprek (week 5)

<details>
<summary>uitwerken voor eindgesprek</summary>

### Stand van zaken
Website bijna compleet, maar nog niet volledig. Sommige klikbare elementen zijn nog niet klikbaar. En tweede pagina bevat niks speciaals. Nav button naar boven brengen, hamburger menu op tweede pagina werkend maken, logo als home button laten werken, extra toevoeging tweede pagina.  

### Screenshot(s)
<img src="basiswebsite/images/eind1.png" width="375px" alt="eindresultaat">
<img src="basiswebsite/images/eind2.png" width="375px" alt="eindresultaat">
<img src="basiswebsite/images/eind3.png" width="375px" alt="eindresultaat">
<img src="basiswebsite/images/eind4.png" width="375px" alt="eindresultaat">
<img src="basiswebsite/images/eind5.png" width="375px" alt="eindresultaat">
<img src="basiswebsite/images/eind6.png" width="375px" alt="eindresultaat">

</details>





## Bronnenlijst

<details open>
<summary>continu bijhouden terwijl je werkt</summary>

Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

1. https://css-tricks.com/snippets/css/a-guide-to-flexbox/ 
2. https://css-tricks.com/snippets/css/complete-guide-grid/ 
3. https://css-tricks.com/stripes-css/ 
4. https://www.w3schools.com/css/css3_animations.asp 
5. DLO
6. https://www.w3schools.com/css/css_intro.asp  
7. https://fonts.google.com/  
8. https://blog.hubspot.com/website/scrolling-text-css 

</details>
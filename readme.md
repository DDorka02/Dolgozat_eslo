MVC - dolgozat A
Készíts játékot az alábbiak szerint MVC modellel!

Adott 20 kártya véletlenszerűen ördög, vagy szellem képpel. (emoji is lehet)

Kezdetben a kártyán nem látszik a kép. 

Ha rákattintunk a kártyára, akkor láthatóvá válik a kép és a képernyőre kiíródik, hoyg "Elvitt az ördög!" vagy "Megmentettek a jó lelkek!".

Az oldalnak reszponzívnak kell lenni, 5 kártya legyen egymás mellett, ha az oldal mérete csökken, az egymás melleti kártyák száma is csökkenjen. 

View

Jatekter osztály

Állítsd be az adattagokat
Hozz létre egy html elemet az eredmény kiírásának is! Fogd meg ezt az elemet!
Írj hozzá setterrt, amivel beállíthatod az elem szöveges tartalmát! (setSzoveg)
Példányosítsd a Kartya osztályt annyiszor, ahány eleme van a listának!
Kartya osztály

Állítsd be az adattagokat!
Hozd létre egy kártya  html struktúráját!
Fogd meg a létrehozott kártya div-et!
Tegyél eseménykezelőt a a kártyára!
Kattintáskor jelenjen meg a megfelelő jel a kártyán!
Hozz létre saját eseményt!
Controller

Példányosítsd a modellt!
Kérd le a modellből a listát!
Példányosítsd a view-t!
Iratkozz fel a Kartya osztály eseménykezelőjére!
Az eseménykezelőben hívd meg a modell ellenorzes metódusát!
Hívd meg a Jatekter setSzoveg metódusát, és írd ki aszövegesen az eredményt a képernyőre!
Modell

Hozz létre egy lista tagfüggvényt, és helyezd el benne a szellemeket és az ördögöt. 
ötösért: 30 % valószínűséggel lehet egy érték ördög. 
készíts gettert a lista adatainak lekérdezésére. 
Készíts ellenőrzés tagfüggvényt, mely visszaadja, hoyg a paraméterként kapott indexű hely alapján mit kell kiírni a képernyőre.  "Elvitt az ördög!" vagy "Megmentettek a jó lelkek!".

#Jobba med api

Nu ska vi jobba mot ett api för att få data från en extern källa som vi kan visa upp på vår sida eller app. Vi ska använda oss av ett väder-api från den här tjänsten: https://tomorrow.io/

För att använda deras tjänst behöver vi först skapa ett konto för att få en api-nyckel. Den nyckeln fungerar som en identifierare så att när vi anropar deras api så vet dom om vem det är som gör anropet.

#Instruktioner

- skapa ett konto på https://tomorrow.io/
- hitta deras dokumentation
- hitta deras "weather forecast"-del i dokumentationen
- ta exempelkoden som finns där och gör om den till att använda async/await i ert egna program
- lägg till er egen api-nyckel i anropet
- använd javascript för att programmatiskt ändra vilken stad ni vill kolla vädret på

#Bygg upp er frontend

- skapa ett input-fält för att välja stad med tillhörande knapp för att köra
- visa detaljer om vädret på sidan efter ni klickat på sök-knappen
- visa ett meddelande baserat på väderinformationen ni får från api'et

#EXTRA

- Lägg till det här på er Tamagotchi där vädret påverkar er Tamagotchi. Om det regnar ute kanske glädjen går ner fortare, eller om det är väldigt fint väder så kanske glädjen går ner långsammare? ni väljer själva.
- Lägg till så bakgrunden hos er Tamagotchi ändras efter väder. Så det blir mörkare blå färg ju kallare det är, eller ljusare gul färg om det är varmt.

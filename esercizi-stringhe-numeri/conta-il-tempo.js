/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

var nseconds = 12560;


hours =  Math.floor (nseconds/ 3600);
minutes = Math.floor ((nseconds / 60) - (hours*60));
seconds = Math.floor (nseconds - (minutes*60) - (hours*3600));

console.log(+hours +' ore, ' +minutes +' minuti, ' +seconds +' secondi.')

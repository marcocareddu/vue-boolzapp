# MILESTONE 1
## Replica della grafica.
- [x] Prelevare i colori.
- [x] Importare `font-awesome`.
- [x] Creare lo sfondo principale.
- [x] Layout app dentro container.
    - [x] Due `<div>` affiancati, `contacts-side` e `conversation-side`.
    - [x] Header di entrambi i `<div>`.
    - [x] Footer di `conversation-side`.
    - [x] Notification alert in `contacts-side`.
    - [x] Search bar in `contacts-side`.
    - [x] Hardcoding dei messaggi, `sent` e `received`.
    - [x] Hardcoding contatti di `contacts-side`.

<br>

## Visualizzazione dinamica della lista contatti.
- [x] Importare l'array `contacts` e l'oggetto `user`.
- [x] **V-FOR** di ogni elemento di `contacts`:
    - [x] Stampare e collegare in DOM la lista di `contacts.name` e `contacts.avatar`.

<br>

# MILESTONE 2
## Visualizzazione dinamica dei messaggi.
- [x] **V-FOR** visualizzare i messagi di un utente hardcoded.
- [x] Creare una variabile `activeIndex`.
- [x] Creare una funzione `changeIndex`:
    - [x] Assegna un numero passato come argomento, in questo caso sarà l'id del contatto. 

<br>

## Click sul contatto.
- [x] Entrerà in funzione `displayChat` con argomento l'id del contatto.

<br>

# MILESTONE 3
## Aggiunta di un messaggio.
- [x] Creare una variabile `messageToSend`.
- [x] Creare una funzione `sendMessage`con parametro `userInput`:
    - [x] creare un template `newTemplate`.
    - [x] Pushare il `newTemplate` in `contacts`.
- [x] V-model su input text che assegna a `messageToSend`.
- [x] @keyup.enter su input con `sendMessage` con parametro `messageToSend`.

<br>

## Risposta dall'interlocutore.
-[x] Aggiungere a `sendMessage` un setTimeout che crea un messaggio dopo 1s e lo pusha in `contacts`.

<br>

# MILESTONE 4
## Ricerca Utenti.
- [x] Creare una variabile `textToSearch`.
- [ ] Collegare con v-model input a `textToSearch`.
- [ ] Creare una computed `listToSearch`:
    - [ ] Usando **filter** *ritorniamo* la copia di `contacts` filtrata con `textToSearch`.
- [ ] Sostituire nel Dom i riferimenti a `contacts` con `listToSearch`.
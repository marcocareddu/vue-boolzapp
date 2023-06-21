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
- [ ] **V-FOR** visualizzare i messagi di un utente hardcoded.
- [ ] Creare una variabile `activeIndex`.
- [ ] Creare una funzione `displayChat`:
    - [ ] Assegna un numero passato come argomento, in questo caso sarà l'id del contatto. 

<br>

## Click sul contatto.
- [ ] Entrerà in funzione `displayChat` con argomento l'id del contatto.
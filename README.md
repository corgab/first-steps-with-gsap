# Primi Passi con GSAP

Questo è un progetto che ho creato mentre stavo imparando a usare **GSAP** (GreenSock Animation Platform), una potente libreria JavaScript per la creazione di animazioni fluide e avanzate. Ho deciso di chiamarlo "Primi passi con GSAP" perché rappresenta il mio primo approccio con questa libreria, e l'ho realizzato per esplorare le sue capacità e funzionalità.

## Descrizione del progetto

In questo progetto, ho usato GSAP per animare vari elementi sulla pagina. Questi sono gli elementi animati:

- **Titolo**: si sposta da sinistra e appare con un effetto di dissolvenza.
- **Sottotitolo**: si sposta da destra e appare con una dissolvenza.
- **Immagine dell'utente**: si sposta verso l'alto, appare con una dissolvenza e ruota di 360 gradi.

Un pulsante, etichettato inizialmente con "NON CLICCARMI", avvia o riavvia l'animazione e cambia il suo testo in "Te l'avevo detto..." quando l'animazione è completata.

## Tecnologie utilizzate

- **HTML**: Struttura di base della pagina.
- **TailwindCSS**: Framework CSS per lo stile e il layout responsivo.
- **GSAP**: Biblioteca JavaScript per le animazioni fluide e potenti.
- **JavaScript**: Per il controllo delle animazioni e l'interazione con l'utente.

## Come funziona

### 1. Animazione al caricamento della pagina

Al caricamento della pagina, l'animazione è impostata per animare i seguenti elementi:

- Il titolo (`#title`) si sposterà verso destra, partendo da una posizione di `-100px` e scomparendo gradualmente.
- Il sottotitolo (`#subtitle`) si sposterà verso sinistra, partendo da una posizione di `100px`, sempre con una dissolvenza.
- L'immagine dell'utente (`#guy`) si sposterà verso l'alto, apparirà e ruoterà di 360 gradi.

### 2. Interazione con il bottone

Un bottone con id `#play` è presente sulla pagina. Quando l'utente clicca sul pulsante, viene eseguita la seguente logica:

- Se l'animazione è finita (`tl.progress() === 1`), l'animazione verrà riavviata da capo.
- Altrimenti, l'animazione partirà dal punto in cui è stata interrotta.
- Dopo che l'animazione è completa, il testo del bottone cambia in "Te l'avevo detto...".

### 3. Codice JavaScript

Il codice JavaScript è gestito con GSAP e contiene la creazione di una timeline animata. La funzione `tl` rappresenta la sequenza di animazioni. La timeline include gli effetti di animazione e la gestione dei pulsanti.

## Come avviare il progetto

Per avviare questo progetto localmente, segui questi passaggi:

1. **Clona il repository**:

   ```bash
   git clone https://github.com/corgab/first-steps-with-gsap.git
   ```

2. **Installa le dipendenze**:
   ```bash
   npm install
   ```
3. **Avvia il progetto**:

   ```bash
   npm run dev
   ```

4. **Interagisci con il pulsante**:
   Clicca sul pulsante per avviare l'animazione e guarda il testo cambiare al termine dell'animazione.

## Conclusioni

Questo progetto rappresenta i **primi passi** che ho fatto con GSAP.

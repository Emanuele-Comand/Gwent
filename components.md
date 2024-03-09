# COMPONENTI

## SELEZIONE MAZZO 

* Logo + nome del mazzo

* Bottone mazzo seguente + nome mazzo seguente

* Bottone mazzo precedente + nome mazzo precedente

* Breve descrizione del mazzo

Il componente consiste in un carosello con due bottoni che permettono di scorrere i 4 mazzi.

Le carte nel componente *"COLLEZIONE CARTE"* cambiano in base al mazzo scelto.

### LOGICA DEL COMPONENTE SELEZIONE MAZZO

1. Creiamo un array di oggetti contenenti due proprietà:

     * Nome del mazzo
     * Logo del mazzo

  <mark>***NOTA: I loghi dei mazzi sono delle semplici immagini che ho preso dalla wiki di The Witcher 3 e importato nel componente, si trovano nella sotto-cartella "icons" della cartella "assets". Ecco il codice degli import***</mark>

```js
import northern from "../assets/icons/Tw3_gwent_deck_Northern_Realms.webp";
import nilfgaard from "../assets/icons/Tw3_gwent_deck_Nilfgaardian.webp";
import monsters from "../assets/icons/Tw3_gwent_deck_Monsters.webp";
import scoiatael from "../assets/icons/Tw3_gwent_deck_Scoiatael.webp";
```

Ecco il codice dell'array.

```js
const empiresArray = [
    {
      empireName: "Northern Realms",
      empireLogo: northern,
    },
    {
      empireName: "Nilfgaardian Empire",
      empireLogo: nilfgaard,
    },
    {
      empireName: "Monsters",
      empireLogo: monsters,
    },
    {
      empireName: "Scoia'Tael",
      empireLogo: scoiatael,
    },
  ];
  ```

2. Aggiungiamo uno stato che come default prende l'indice 0 dell'array.

```js
const [currentIndex, setIndex] = useState(0);
```

3. Scriviamo due funzioni che iterano sugli indici dell'array 

```js
const goToNext = () => {
   
    if (!empiresArray[currentIndex + 1]) {
      setIndex(0);
      
    } else {
      setIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex === 0) {
      setIndex(empiresArray.length - 1);
      
    } else {
      setIndex(currentIndex - 1);
    }
  };

  ```

4. Richiamiamo le due funzioni sull'evento click dei bottoni del carosello

```js

        <div onClick={goToNext} className="next-btn btn">
          <img src={arrowRight} alt="" style={{ height: "25px" }}></img>
        </div>

        <div onClick={goToPrev} className="prev-btn btn">
          <img src={arrowLeft} alt="" style={{ height: "25px" }}></img>
        </div>

```

5. Passiamo le proprietà degli oggetti contenuti nell'array ai rispettivi elementi html

    

## COLLEZIONE CARTE

* Titoletto 

* Icone per selezione tipologia di carte

* Finestra principale dove renderizzare le carte. <mark>***NOTA: La finestra deve contenere 3 carte per riga e si deve poter scrollare***</mark>

* Si trova nella parte snistra dello schermo

<mark>***IMPORTANTE: Cliccando su una delle carte la inseriamo nel nostro mazzo***</mark>

### LOGICA DEL COMPONENTE COLLEZIONE CARTE

## CARTE NEL MAZZO 

* Titoletto 

* Icone per selezione tipologia di carte

* Finestra principale dove renderizzare le carte. <mark>***NOTA: La finestra deve contenere 3 carte per riga e si deve poter scrollare***</mark>

### LOGICA DEL COMPONENTE CARTE NEL MAZZO 

## CARTA









